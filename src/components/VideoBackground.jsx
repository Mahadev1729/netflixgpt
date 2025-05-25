import { useEffect} from "react";
import { API_OPTIONS } from "../utilis/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utilis/movieSlice";

const VideoBackground = ({ movieId }) => {

  // fetch trailer video
  const dispatch=useDispatch()
  const trailerVideo=useSelector(store=>store.movies?.trailerVideo)


  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/950387/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((video) => video.type == "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    console.log(filterData);
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideo();
  }, []);

  return (
    <div>
      <iframe
        src={"https://www.youtube.com/embed/"+trailerVideo?.key}        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;
