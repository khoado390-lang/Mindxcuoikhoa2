import "./Header.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="header">

      <div className="logo-container">

        <img src={logo} alt="logo" className="logo-img" />

        <div className="logo-text">
          <span>DIRECT</span>
          <span>AUTOMOTIVES</span>
        </div>

      </div>

      <div className="phone">
        CALL NOW : <span>123 456 789</span>
      </div>

    </div>
  );
}

export default Header;