import { useState, useEffect } from "react";
import "./Account.css";

function Account() {

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // ===== LOAD DATA =====
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("user"));

    if (saved) {
      setUser((prev) => ({
        ...prev,
        ...saved,
      }));
    }
  }, []);

  // ===== INPUT =====
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));

    // clear lỗi
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // ===== VALIDATE =====
  const validate = () => {
    let newErrors = {};

    const savedUser = JSON.parse(localStorage.getItem("user"));

    // ===== CHECK RỖNG =====
    if (!user.name) newErrors.name = "Vui lòng nhập họ tên";
    if (!user.phone) newErrors.phone = "Vui lòng nhập số điện thoại";
    if (!user.email) newErrors.email = "Vui lòng nhập email";
    if (!user.address) newErrors.address = "Vui lòng nhập địa chỉ";

    if (!user.currentPassword)
      newErrors.currentPassword = "Nhập mật khẩu hiện tại";

    if (!user.newPassword)
      newErrors.newPassword = "Nhập mật khẩu mới";

    if (!user.confirmPassword)
      newErrors.confirmPassword = "Xác nhận mật khẩu";

    // ===== CHECK PASSWORD CŨ =====
    if (!savedUser?.password) {
      newErrors.currentPassword = "Tài khoản chưa có mật khẩu";
    } else if (
      user.currentPassword &&
      user.currentPassword !== savedUser.password
    ) {
      newErrors.currentPassword = "Mật khẩu hiện tại không đúng";
    }

    // ===== CHECK PASSWORD TRÙNG =====
    if (
      user.newPassword &&
      user.confirmPassword &&
      user.newPassword !== user.confirmPassword
    ) {
      newErrors.confirmPassword = "Mật khẩu không khớp";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ===== SAVE =====
  const handleSave = () => {
    const isValid = validate();

    if (!isValid) return; // 🔥 CHẶN LƯU

    const saveData = {
      name: user.name,
      phone: user.phone,
      email: user.email,
      address: user.address,
      password: user.newPassword, // 🔥 cập nhật mật khẩu
    };

    localStorage.setItem("user", JSON.stringify(saveData));

    alert("✅ Cập nhật thành công!");
  };

  return (
    <div className="account-page">

      <div className="account-container">

        <h2>Thông tin tài khoản của bạn</h2>
        <p>Quản lý thông tin để bảo mật tài khoản</p>

        <div className="form-grid">

          {/* LEFT */}
          <div className="form-left">

            <label>Họ và tên</label>
            <input
              name="name"
              value={user.name}
              onChange={handleChange}
            />
            <span className="error">{errors.name}</span>

            <label>Số điện thoại</label>
            <input
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />
            <span className="error">{errors.phone}</span>

            <label>Email</label>
            <input
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <span className="error">{errors.email}</span>

            <label>Địa chỉ</label>
            <input
              name="address"
              value={user.address}
              onChange={handleChange}
            />
            <span className="error">{errors.address}</span>

          </div>

          {/* RIGHT */}
          <div className="form-right">

            <label>Mật khẩu hiện tại</label>
            <input
              type="password"
              name="currentPassword"
              onChange={handleChange}
            />
            <span className="error">{errors.currentPassword}</span>

            <label>Mật khẩu mới</label>
            <input
              type="password"
              name="newPassword"
              onChange={handleChange}
            />
            <span className="error">{errors.newPassword}</span>

            <label>Xác nhận mật khẩu mới</label>
            <input
              type="password"
              name="confirmPassword"
              onChange={handleChange}
            />
            <span className="error">{errors.confirmPassword}</span>

          </div>

        </div>

        <button className="save-btn" onClick={handleSave}>
          💾 Lưu thay đổi
        </button>

      </div>

    </div>
  );
}

export default Account;