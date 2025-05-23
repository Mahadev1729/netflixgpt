import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utilis/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utilis/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utilis/userSlice";
import { BACKGROUND_IMAGE, USER_AVATAR } from "../utilis/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handelButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    setLoading(true);

    if (!isSignInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          return updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: USER_AVATAR,
          });
        })
        .then(() => {
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(
            addUser({
              uid,
              email,
              displayName,
              photoURL,
            })
          );
        })
        .catch((error) => {
          setErrorMessage(error.message);
        })
        .finally(() => setLoading(false));
    } else {
      // Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          setErrorMessage(`${error.code} - ${error.message}`);
        })
        .finally(() => setLoading(false));
    }
  };

  const toggelSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  return (
    <div>
      <Header />
      <div className="absolute w-screen h-screen overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={BACKGROUND_IMAGE}
          alt="Background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 w-3/12 text-white bg-gray-700 bg-opacity-80 my-40 right-0 mx-auto left-0 rounded-3xl border-transparent shadow-md"
      >
        <h1 className="font-bold text-3xl py-4 text-center text-cyan-300">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-4 m-4 w-full bg-gray-600 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 m-4 w-full bg-gray-600 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 m-4 w-full bg-gray-600 rounded-lg"
        />

        {errorMessage && (
          <p className="text-red-500 font-bold text-lg text-center">
            {errorMessage}
          </p>
        )}

        <div className="flex justify-center mt-6">
          <button
            className={`p-4 rounded-3xl w-[130px] font-semibold ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-cyan-300 bg-opacity-90 hover:bg-cyan-400"
            }`}
            onClick={handelButtonClick}
            disabled={loading}
          >
            {loading ? (
              <div className="flex justify-center items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Loading...
              </div>
            ) : isSignInForm ? (
              "Sign In"
            ) : (
              "Sign Up"
            )}
          </button>
        </div>

        <p
          className="py-4 cursor-pointer text-center hover:text-cyan-300"
          onClick={toggelSignInForm}
        >
          {isSignInForm
            ? "Are you new to Netflix? Sign Up now"
            : "Already Registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
