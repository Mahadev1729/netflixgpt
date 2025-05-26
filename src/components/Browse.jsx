import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopratedMovies from "../hooks/useTopratedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecandaryContainer from "./SecondarayContainer";

const Browse = () => {
  // fetch  data from TMDB API and update here
    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovies();
    useTopratedMovies();

  return (
    <div>
      <Header />
      <GptSearch/>
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
