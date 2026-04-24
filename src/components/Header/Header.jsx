import { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo2.png";
import AuthModal from "../AuthModal/AuthModal";
import { useNavigate } from "react-router-dom";

function Header({ cart, setCart }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [mode, setMode] = useState("login");
  const navigate = useNavigate();

  const [showCart, setShowCart] = useState(false);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLogin") === "true"
  );

  const increase = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrease = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

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
            <span className="login-text">
              {isLogin ? user?.name : "Đăng nhập / Đăng ký"}
            </span>

            <span className="account-name">
              Tài khoản ▼
            </span>
          </div>

          {showMenu && (
            <div className="dropdown">
              {!isLogin ? (
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
              ) : (
                <>
                  <div
                    className="dropdown-item"
                    onClick={() => {
                      navigate("/account");
                      setShowMenu(false);
                    }}
                  >
                    👤 Tài khoản của tôi
                  </div>

<div
  className="dropdown-item"
  onClick={() => {
    navigate("/orders");
    setShowMenu(false);
  }}
>
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

        {/* 🛒 CART */}
        <div
          className="cart"
          onClick={() => {
            console.log("OPEN CART");
            setShowCart(true);
          }}
        >
          <div className="cart-icon">
            🛒
            <span className="cart-count">
              {cart.reduce((a, b) => a + b.quantity, 0)}
            </span>
          </div>
          <span>Giỏ hàng</span>
        </div>

      </div>

      {/* ===== CART OVERLAY ===== */}
      <div className={`cart-overlay ${showCart ? "show" : ""}`}>
        <div
          className="cart-panel"
          onClick={(e) => e.stopPropagation()}
        >

          {/* HEADER */}
          <div className="cart-header">
            <h3>🛒 Giỏ hàng</h3>
            <span onClick={() => setShowCart(false)}>✕</span>
          </div>

          {/* BODY */}
          <div className="cart-body">
            {cart.length === 0 ? (
              <p className="empty">Không có sản phẩm</p>
            ) : (
              cart.map((item) => (
                <div className="cart-item" key={item.id}>

                  <img src={item.image || "/car.jpg"} alt="" />

                  <div className="cart-info">
                    <p>{item.name}</p>
                    <small>{item.price.toLocaleString()} đ</small>

                    <div className="qty">
                      <button onClick={() => decrease(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increase(item.id)}>+</button>
                    </div>
                  </div>

                  <button
                    className="remove"
                    onClick={() => removeItem(item.id)}
                  >
                    🗑
                  </button>

                </div>
              ))
            )}
          </div>

          {/* FOOTER */}
          <div className="cart-footer">
            <p>
              Tổng tiền:
              <b>
                {cart
                  .reduce((t, i) => t + i.price * i.quantity, 0)
                  .toLocaleString()} đ
              </b>
            </p>

<button
  className="checkout-btn"
  onClick={() => {
    setShowCart(false);
    navigate("/checkout");
  }}
>
  Thanh toán
</button>
          </div>

        </div>
      </div>

      {/* LOGIN */}
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