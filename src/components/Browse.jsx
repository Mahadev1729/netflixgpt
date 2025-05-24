import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";

const Browse = () => {
  // fetch  data from TMDB API and update here
    useNowPlayingMovies();
  

  return (
    <div>
      <Header />
    </div>
  );
};
export default Browse;
