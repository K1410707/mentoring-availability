import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="leftPanel">
        <h1>Mentoring Hub</h1>
        <p className="welcome">Welcome Jon</p>
      </div>
      <div className="rightPanel">
        <p className="accountView">Account</p>
      </div>
    </div>
  );
}

export default Header;
