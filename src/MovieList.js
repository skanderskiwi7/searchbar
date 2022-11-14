import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((e) => (
        <MovieCard movie={e} />
      ))}
    </div>
  );
};

export default MovieList;
