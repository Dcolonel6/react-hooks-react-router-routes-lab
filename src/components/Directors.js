import { directors } from "../data";
import Item  from "./Item";

function Directors() {
  const listOfDirectorItem = directors.map(({ name, movies },index) => (
    <Item key={index} name={name} movies={movies} />
  ));

  return (
    <div>
      <h1> Directors Page</h1>
      {listOfDirectorItem}
    </div>
  );
}

export default Directors;
