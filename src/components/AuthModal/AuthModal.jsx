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
    if (mode === "login") setIsLogin(true);
    if (mode === "register") setIsLogin(false);
  }, [mode]);

  if (!isOpen) return null;

  // 👉 INPUT
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    // 🔥 clear lỗi khi gõ
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

      if (
        form.password &&
        form.confirm &&
        form.password !== form.confirm
      ) {
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
      // REGISTER
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: form.name,
          phone: form.phone,
          password: form.password,
        })
      );

      alert("Đăng ký thành công! Mời đăng nhập lại");

      setIsLogin(true); // 👉 quay về login
      setForm({
        name: "",
        phone: "",
        password: "",
        confirm: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>✕</span>

        <h2>{isLogin ? "Đăng nhập tài khoản" : "Đăng ký tài khoản"}</h2>

        <div className="auth-form">

          {/* NAME */}
          {!isLogin && (
            <>
              <input
                name="name"
                placeholder="Họ tên"
                value={form.name}
                onChange={handleChange}
                className={errors.name ? "input-error" : ""}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </>
          )}

          {/* PHONE */}
          <input
            name="phone"
            placeholder="Số điện thoại"
            value={form.phone}
            onChange={handleChange}
            className={errors.phone ? "input-error" : ""}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}

          {/* PASSWORD */}
          <input
            type="password"
            name="password"
            placeholder="Mật khẩu"
            value={form.password}
            onChange={handleChange}
            className={errors.password ? "input-error" : ""}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          {/* CONFIRM */}
          {!isLogin && (
            <>
              <input
                type="password"
                name="confirm"
                placeholder="Nhập lại mật khẩu"
                value={form.confirm}
                onChange={handleChange}
                className={errors.confirm ? "input-error" : ""}
              />
              {errors.confirm && <p className="error">{errors.confirm}</p>}
            </>
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