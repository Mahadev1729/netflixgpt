import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) {
    return <div>No movies to display</div>;
  }

  return (
    <div className="my-4">
      <h1 className="text-xl font-semibold mb-2">{title}</h1>
      <div className="flex overflow-x-scroll h-[350px] w-full">
        <div className="flex gap-3">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
