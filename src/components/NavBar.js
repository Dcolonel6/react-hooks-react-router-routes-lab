import { NavLink } from "react-router-dom";

const active = { color: "purple" };
const defaultStyle = {
  color: "blue",
};

function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/" style={defaultStyle} activeStyle={active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" style={defaultStyle} activeStyle={active}>
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/directors" style={defaultStyle} activeStyle={active}>
            Directors
          </NavLink>
        </li>
        <li>
          
          <NavLink to="/actors" style={defaultStyle} activeStyle={active}>
            Actors
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
