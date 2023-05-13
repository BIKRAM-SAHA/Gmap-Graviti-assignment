import logo from "../../asset/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <img src={logo} alt="" className="logo" />
      </div>
    </nav>
  );
}

export default Navbar;
