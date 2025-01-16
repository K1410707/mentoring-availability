import "./Layout.scss";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <Navbar />
      <div>homepage</div>
      <Footer />
    </div>
  );
}

export default Layout;
