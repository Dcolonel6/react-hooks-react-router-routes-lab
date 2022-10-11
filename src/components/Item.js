import react from "react";

function Item({ name, movies }) {
  const listOfMovies = movies.map((movie, index) => (
    <li key={index}>{movie}</li>
  ));
  return (
    <react.Fragment>
      <h2>Name: {name}</h2>
      <p>Movies:</p>
      <ul>{listOfMovies}</ul>
    </react.Fragment>
  );
}
export default Item;
