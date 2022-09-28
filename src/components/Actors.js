import { actors } from "../data";
import Item  from "./Item";

function Actors() {
  const listOfDirectorItem = actors.map(({ name, movies },index) => (
    <Item key={index} name={name} movies={movies} />
  ));

  return (
    <div>
      <h1>Actors Page</h1>
      {listOfDirectorItem}
    </div>
  );
}

export default Actors;



