import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SecandaryContainer=()=>{
    const movies=useSelector(store=>store.movies);
    return(
        <div>
            <MovieList  title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            {/**
             Multiple movie list
             trending Movies
             Movieslist-Now Playing
             Movies-Geners
             */}
        </div>
    )
}
export default SecandaryContainer;
