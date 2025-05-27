import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-pink-100 px-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-md text-center">
        <div className="text-7xl font-extrabold text-blue-600 mb-4">404</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          Oops! The page you're looking for does not  exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
