import { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import AuthModal from "../AuthModal/AuthModal";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [mode, setMode] = useState("login");

  // 👉 USER
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLogin") === "true"
  );

  return (
    <div className="header">

      {/* LOGO */}
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo-img" />
        <div className="logo-text">
          <span>DIRECT</span>
          <span>AUTOMOTIVES</span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="header-right">

        {/* ACCOUNT */}
        <div
          className="account"
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className="account-icon">👤</div>

          <div className="account-text">
            {/* 🔥 HIỂN THỊ TÊN */}
            <span className="login-text">
              {isLogin ? user?.name : "Đăng nhập / Đăng ký"}
            </span>

            <span className="account-name">
              Tài khoản ▼
            </span>
          </div>

          {/* 🔥 DROPDOWN */}
          {showMenu && (
            <div className="dropdown">

              {/* 👉 CHƯA LOGIN */}
              {!isLogin && (
                <>
                  <div
                    className="dropdown-item"
                    onClick={() => {
                      setMode("login");
                      setShowAuth(true);
                      setShowMenu(false);
                    }}
                  >
                    🔑 Đăng nhập
                  </div>

                  <div
                    className="dropdown-item"
                    onClick={() => {
                      setMode("register");
                      setShowAuth(true);
                      setShowMenu(false);
                    }}
                  >
                    ➕ Đăng ký
                  </div>
                </>
              )}

              {/* 👉 ĐÃ LOGIN */}
              {isLogin && (
                <>
                  <div className="dropdown-item">
                    👤 Tài khoản của tôi
                  </div>

                  <div className="dropdown-item">
                    📦 Đơn hàng đã mua
                  </div>

                  <div
                    className="dropdown-item"
                    onClick={() => {
                      localStorage.removeItem("isLogin");
                      setIsLogin(false);
                      setUser(null);
                    }}
                  >
                    🚪 Đăng xuất
                  </div>
                </>
              )}

            </div>
          )}
        </div>

        {/* CART */}
        <div className="cart">
          <div className="cart-icon">
            🛒
            <span className="cart-count">0</span>
          </div>
          <span>Giỏ hàng</span>
        </div>

      </div>

      {/* 🔥 MODAL */}
      <AuthModal
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
        mode={mode}
        onLoginSuccess={(userData) => {
          setUser(userData);
          setIsLogin(true);
        }}
      />

    </div>
  );
}

export default Header;