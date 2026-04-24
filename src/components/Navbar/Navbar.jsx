import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <ul className="menu">

        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            TRANG CHỦ
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
            VỀ CHÚNG TÔI
          </NavLink>
        </li>

        <li>
          <NavLink to="/new-cars" className={({ isActive }) => isActive ? "active" : ""}>
            XE MỚI
          </NavLink>
        </li>

        <li>
          <NavLink to="/used-cars" className={({ isActive }) => isActive ? "active" : ""}>
            XE ĐÃ SỬ DỤNG
          </NavLink>
        </li>

        <li>
          <NavLink to="/service" className={({ isActive }) => isActive ? "active" : ""}>
            DỊCH VỤ
          </NavLink>
        </li>

      </ul>
    </div>
  );
}

export default Navbar;