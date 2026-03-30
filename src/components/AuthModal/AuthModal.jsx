import { useState, useEffect } from "react";
import "./AuthModal.css";

function AuthModal({ isOpen, onClose, mode, onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    password: "",
    confirm: "",
  });

  const [errors, setErrors] = useState({});

  // 👉 sync mode
  useEffect(() => {
    if (!isOpen) return;

    setIsLogin(mode === "login");

    setForm({
      name: "",
      phone: "",
      password: "",
      confirm: "",
    });

    setErrors({});
  }, [mode, isOpen]);

  if (!isOpen) return null;

  // 👉 INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    setErrors({ ...errors, [name]: "" });
  };

  // 👉 VALIDATE
  const validate = () => {
    let err = {};

    if (isLogin) {
      if (!form.phone) err.phone = "Vui lòng nhập số điện thoại";
      if (!form.password) err.password = "Vui lòng nhập mật khẩu";
    } else {
      if (!form.name) err.name = "Vui lòng nhập họ tên";
      if (!form.phone) err.phone = "Vui lòng nhập số điện thoại";
      if (!form.password) err.password = "Vui lòng nhập mật khẩu";
      if (!form.confirm) err.confirm = "Vui lòng nhập lại mật khẩu";

      if (form.password !== form.confirm) {
        err.confirm = "Mật khẩu không khớp";
      }
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // 👉 SUBMIT
  const handleSubmit = () => {
    if (!validate()) return;

    if (isLogin) {
      const user = JSON.parse(localStorage.getItem("user"));

      if (
        user &&
        user.phone === form.phone &&
        user.password === form.password
      ) {
        localStorage.setItem("isLogin", "true");
        onLoginSuccess(user);
        onClose();
      } else {
        alert("Sai tài khoản hoặc mật khẩu");
      }
    } else {
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: form.name,
          phone: form.phone,
          password: form.password,
        })
      );

      alert("Đăng ký thành công!");

      setIsLogin(true);
      setForm({
        name: "",
        phone: "",
        password: "",
        confirm: "",
      });
    }
  };

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>
          ✕
        </span>

        <h2>{isLogin ? "Đăng nhập" : "Đăng ký tài khoản"}</h2>

        <div className="auth-form">
          {/* NAME */}
          {!isLogin && (
            <div className="input-group">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder=" "
                className={errors.name ? "input-error" : ""}
              />
              <label>Họ tên</label>
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
          )}

          {/* PHONE */}
          <div className="input-group">
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder=" "
              className={errors.phone ? "input-error" : ""}
            />
            <label>Số điện thoại</label>
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          {/* PASSWORD */}
          <div className="input-group">
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder=" "
              className={errors.password ? "input-error" : ""}
            />
            <label>Mật khẩu</label>
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          {/* CONFIRM */}
          {!isLogin && (
            <div className="input-group">
              <input
                type="password"
                name="confirm"
                value={form.confirm}
                onChange={handleChange}
                placeholder=" "
                className={errors.confirm ? "input-error" : ""}
              />
              <label>Nhập lại mật khẩu</label>
              {errors.confirm && <p className="error">{errors.confirm}</p>}
            </div>
          )}

          <button className="btn-submit" onClick={handleSubmit}>
            {isLogin ? "ĐĂNG NHẬP" : "ĐĂNG KÝ"}
          </button>

          <div className="switch">
            {isLogin ? (
              <>
                Chưa có tài khoản?{" "}
                <span onClick={() => setIsLogin(false)}>Đăng ký</span>
              </>
            ) : (
              <>
                Đã có tài khoản?{" "}
                <span onClick={() => setIsLogin(true)}>Đăng nhập</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;