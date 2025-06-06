import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utilis/languageConstant";
import { API_OPTIONS } from "../utilis/constant";
import { addGptMovieResult } from "../utilis/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const userQuery = searchText.current.value;
    if (!userQuery.trim()) return;

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      userQuery +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    let movieListText = "";

    try {
      const response = await fetch("https://api.cohere.ai/v1/generate", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_COHERE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "command-r",
          prompt: gptQuery,
          max_tokens: 100,
          temperature: 0.7,
          return_likelihoods: "NONE",
        }),
      });

      const data = await response.json();
      movieListText = data.generations?.[0]?.text?.trim();
      console.log("Cohere result:", movieListText);
    } catch (err) {
      console.error("Cohere API Error:", err);
      return;
    }

    if (!movieListText) return;

    const gptMovies = movieListText.split(",").map((m) => m.trim());
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
