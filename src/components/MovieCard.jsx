import { IMG_CDN_URL } from "../utilis/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="min-w-[280px] h-[300px] rounded-lg overflow-hidden shadow-lg">
      <img
        className="w-full h-full object-cover"
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
