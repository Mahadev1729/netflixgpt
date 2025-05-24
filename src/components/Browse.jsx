import { useEffect } from "react";
import { API_OPTIONS } from "../utilis/constant";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utilis/movieSlice";



const Browse = () => {
    // fetch  data from TMDB API and update here
    
  return (
    <div>
      <Header />
    </div>
  );
};
export default Browse;
