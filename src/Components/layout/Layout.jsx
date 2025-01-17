import "./Layout.scss";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

function Layout(props) {
  return (
    <div className="layoutContainer">
      <Header loggedInUser={props.loggedInUser}/>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
