import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utilis/firebase";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utilis/userSlice";
import { LOGO_URL, USER_AVATAR, SUPPORTED_LANGUAGES } from "../utilis/constant";
import { toggleGptSearchView } from "../utilis/gptSlice";
import { changeLanguage } from "../utilis/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    // kind like eventlistner
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // for unmount
    // unsubscribe
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // toggle the button
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="w-full absolute px-8 py-8 bg-gradient-to-b from from-black z-10 flex justify-between">
      <img className="w-80" src={LOGO_URL} alt="Logo" />
      {user && (
        <div className="w-full flex justify-end p-4">
          {showGptSearch && (
            <select
              onChange={handleLanguageChange}
              className="p-2 m-2 bg-cyan-500 text-white"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className=" bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-2 px-4 mx-4 my-2 rounded-lg shadow transition duration-200"
          >
            {showGptSearch?"Home":"GPT Search"}
          </button>
          <div className="flex items-center gap-4">
            <img
              className="w-10 h-10 rounded-full border border-gray-300 shadow-sm"
              src={USER_AVATAR}
              alt="user icon"
            />
            <button
              onClick={handleSignOut}
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-2 px-4 rounded-lg shadow transition duration-200"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
      ;
    </div>
  );
};

export default Header;
