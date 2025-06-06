import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utilis/languageConstant";
import { API_OPTIONS } from "../utilis/constant";
import { addGptMovieResult } from "../utilis/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const { movieNames, movieResults } = useSelector((store) => store.gpt);


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
    <div className="pt-[35%] md:pt-[10%] px-4">
      <form
        className="w-full max-w-2xl mx-auto bg-gray-900 bg-opacity-90 rounded-full shadow-lg flex items-center px-4 py-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="flex-grow text-white bg-transparent focus:outline-none px-4 py-2 placeholder-gray-400"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-200"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
  
      {/* Movie Results */}
      <div className="mt-10 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movieResults &&
          movieResults.map((movieList, index) =>
            movieList?.[0] ? (
              <div
                key={index}
                className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={
                    "https://image.tmdb.org/t/p/w500" +
                    movieList[0].poster_path
                  }
                  alt={movieList[0].title}
                  className="w-full h-72 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    {movieList[0].title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {movieList[0].release_date}
                  </p>
                </div>
              </div>
            ) : (
              <div
                key={index}
                className="bg-gray-800 text-white rounded-lg p-4 text-center"
              >
                <p>No match for "{movieNames[index]}"</p>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default GptSearchBar;
