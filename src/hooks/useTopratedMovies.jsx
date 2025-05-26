import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilis/constant"
import { addTopratedMovies } from "../utilis/movieSlice";
import { useEffect } from "react";

const useTopratedMovies=()=>{
   const dispatch=useDispatch();
    const getTopratedMovies=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",API_OPTIONS);
        const json=await data.json();
        dispatch(addTopratedMovies(json.results));
    };
    useEffect(()=>{
        getTopratedMovies();
    },[]);
};
export default useTopratedMovies;
