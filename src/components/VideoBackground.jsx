import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  // fetch trailer video update the store trailer video data

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div>
      <iframe
        src={"https://www.youtube.com/embed/" + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
