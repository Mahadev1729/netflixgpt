import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utilis/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggelSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handelButtonClick = () => {
    // validate the form data using utilis
    const message = checkValidData(email.current.value, password.current.value);
    //   console.log(email);
    //   console.log(password);
    setErrorMessage(message);
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
