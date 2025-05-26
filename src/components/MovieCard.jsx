﻿import { useState } from "react";
import { IMG_CDN_URL } from "../utilis/constant";
import ShimmerUi from "./ShimmerUi";

const MovieCard = ({ posterPath, title = "Movie Poster" }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  return (
    <div className="min-w-[280px] h-[300px] rounded-lg overflow-hidden shadow-lg relative bg-gray-900 hover:scale-105 transition-transform duration-300">
      {isLoading && <ShimmerUi />}
      {!isError ? (
        <img
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          alt={title}
          src={IMG_CDN_URL + posterPath}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsError(true);
            setIsLoading(false);
          }}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-700 text-white text-sm">
          Image Not Available
        </div>
      )}
    </div>
  );
};

export default MovieCard;
