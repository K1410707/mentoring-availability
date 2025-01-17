import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navItem">
      <NavLink to="/">Home</NavLink>
      </div>
      <div className="navItem">
      <NavLink to="/modules">My Mentoring Sessions</NavLink>
      </div>
      <div className="navItem">
      <NavLink to="/availability">My Availability</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
