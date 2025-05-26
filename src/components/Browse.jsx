import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecandaryContainer from "./SecondarayContainer";

const Browse = () => {
  // fetch  data from TMDB API and update here
    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovies();
  

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecandaryContainer/>
      {/**
       Main Conatianer
        -- video background
        -- ViewTitle
      SecandaryContainer
        -- MovieList
             -- cardList * N
       */}
    </div>
  );
};
export default Browse;
