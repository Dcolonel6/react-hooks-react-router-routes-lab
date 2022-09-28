import MovieItem from "./MovieItem";
import { movies } from "../data";

function Movies() {
  const listOfMoviesItem = movies.map(({ title, time, genres }, index) => (
    <MovieItem key={index} title={title} time={time} genres={genres} />
  ));
  return (
    <div>
      <h1> Movies Page</h1>
      {listOfMoviesItem}
    </div>
  );
}

export default Movies;
