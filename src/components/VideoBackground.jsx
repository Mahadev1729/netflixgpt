import { useEffect } from "react";
import { API_OPTIONS } from "../utilis/constant";

const VideoBackground = ({ movieId }) => {
  // fetch trailer video

  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/950387/videos?language=en-US",
      API_OPTIONS
    );
    const json=await data.json();
    console.log(json);

    const trailer=json.results.filter(video=>video.type=="Trailer");
    console.log(trailer);
  };
  useEffect(()=>{
   getMovieVideo();
  },[])

  return <div></div>;
};
export default VideoBackground;
