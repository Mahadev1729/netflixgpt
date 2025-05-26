import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SecandaryContainer=()=>{
    const movies=useSelector(store=>store.movies);
    return (
        movies.nowPlayingMovies &&(
      <div>
        {/**
             Multiple movie list
             trending Movies
             Movieslist-Now Playing
             Movies-Geners
             */}
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      </div>
        )
    );
}
export default SecandaryContainer;
