import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utilis/firebase";
import { useSelector } from "react-redux";


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="w-full absolute px-8 py-8 bg-gradient-to-b from from-black z-10 flex justify-between">
      <img
        className="w-80"
        src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
        alt="Logo"
      />
      {user && (
        <div className="w-full flex justify-end p-4">
          <div className="flex items-center gap-4">
            <img
              className="w-10 h-10 rounded-full border border-gray-300 shadow-sm"
              src={user?.photoURL}
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
      )};
    </div>
  );
};

export default Header;
