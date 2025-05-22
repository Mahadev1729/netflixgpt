import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utilis/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utilis/firebase";
import { useNavigate } from "react-router-dom";

import { updateProfile } from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const toggelSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handelButtonClick = () => {
    // validate the form data using utilis
    const message = checkValidData(
      email.current.value,
      password.current.value,
      fullName.current.value
    );

    setErrorMessage(message);

    if (message) return;
    //Sign In sign up logic

    if (!isSignInForm) {
      // sign up logic

      // you can use once instead of using again
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed Up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/191627391?s=96&v=4",
          })
            .then(() => {
              // Profile updated!
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });
          console.log(user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}-${errorMessage}`);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}-${errorMessage}`);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute w-screen h-screen overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://www.teknofilo.com/wp-content/uploads/2021/06/Netflix-1280x720.jpg"
          alt="Background_image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 w-3/12 text-white bg-gray-700 bg-opacity-80 my-40 right-0 mx-auto left-0 rounded-4xl border-transparent shadow-sm"
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
        <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
        <div className="flex justify-center">
          <button
            className="p-4 m-4 bg-cyan-300 bg-opacity-90 rounded-4xl w-[130px] text-black"
            onClick={handelButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        </div>

        <p
          className="py-4 cursor-pointer text-center"
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
