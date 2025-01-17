import "./Header.scss";

function Header(props) {
  return (
    <div className="header">
      <div className="leftPanel">
        <h1>Mentoring Hub</h1>
        <p className="welcome">Welcome {props.loggedInUser}</p>
      </div>
      <div className="rightPanel">
        <p className="accountView">Account</p>
      </div>
    </div>
  );
}

export default Header;
