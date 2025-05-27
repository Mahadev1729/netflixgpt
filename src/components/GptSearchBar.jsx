const GptSearchBar = () => {
  return (
    <div className="flex justify-center items-center pt-[12%] px-4">
      <form className="flex items-center w-full max-w-2xl bg-white rounded-full shadow-lg overflow-hidden">
        <input
          type="text"
          className="flex-grow px-6 py-4 text-lg text-gray-700 focus:outline-none placeholder-gray-500"
          placeholder="Looking for something specific? Start typing and let the search magic happen!"
        />
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 text-lg transition-all duration-200"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
