import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__brand">Pale Shelter</div>

      <nav className="navbar__links">
        <NavLink to="/music">Music</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/images">Images</NavLink>
        <NavLink to="/merch">Merch</NavLink>
        <NavLink to="/shows">Shows</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
