import { useState } from "react";
import { IMG_CDN_URL } from "../utilis/constant";
import ShimmerUi from "./ShimmerUi";

const MovieCard = ({ posterPath }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-w-[280px] h-[300px] rounded-lg overflow-hidden shadow-lg relative bg-gray-800">
      {isLoading && <ShimmerUi />}
      <img
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        alt="Movie Poster"
        src={IMG_CDN_URL + posterPath}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default MovieCard;
