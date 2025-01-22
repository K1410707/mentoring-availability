import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navItem">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="navItem">
        <NavLink to="/sessions">My Mentoring Sessions</NavLink>
      </div>
      <div className="navItem">
        <NavLink to="/students">All students</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
