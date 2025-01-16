import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navItem">
        <p>Home</p>
      </div>
      <div className="navItem">
        <p>Mentoring Sessions</p>
      </div>
      <div className="navItem">
        <p>My Availability</p>
      </div>
    </nav>
  );
}

export default Navbar;
