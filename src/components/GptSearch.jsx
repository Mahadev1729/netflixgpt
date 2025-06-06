
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMAGE } from "../utilis/constant";
const GptSearch = () => {
  return (
    <div>
      <div className="absolute w-screen h-screen overflow-hidden -z-10">
              <img
                className="w-full h-full object-cover"
                src={BACKGROUND_IMAGE}
                alt="Background"
              />
            </div>
      <GptSearchBar />
     
    </div>
  );
};
export default GptSearch;
