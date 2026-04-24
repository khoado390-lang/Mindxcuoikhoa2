import "./Service.css";
import img1 from "../../assets/banner1.jpg";
import img2 from "../../assets/banner2.jpg";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Service() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    model: "",
    km: "",
    time: null,
  });

  const [errors, setErrors] = useState({});

  // ✅ FIX 1: dùng name thay placeholder
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ FIX 2: validate đúng key
  const validate = () => {
    let err = {};

    if (!form.name) err.name = "Nhập tên";
    if (!form.email) err.email = "Nhập email";
    if (!form.phone) err.phone = "Nhập số điện thoại";
    if (!form.model) err.model = "Nhập xe";
    if (!form.time) err.time = "Chọn thời gian";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    alert("✅ Đặt lịch thành công!");
  };

  // ✅ FIX 3: thêm minTime / maxTime (lỗi khiến không chọn được ngày)
  const minTime = new Date();
  minTime.setHours(8, 0, 0);

  const maxTime = new Date();
  maxTime.setHours(17, 30, 0);

  return (
    <div className="service-page">

      {/* ===== TOP ===== */}
      <div className="service-top">

        <div className="service-left">
          <h1>DỊCH VỤ TẠI <span>AUTO CAR</span></h1>

          <p>Bạn đang có nhu cầu mua bán ô tô hạng sang tại Sơn Tùng Auto. Nhân viên hàng đầu của chúng tôi có thể tư vấn cho bạn một chiếc xe phù hợp với tài chính và tính cách bạn một cách nhanh chóng. Chúng tôi biết rằng không có gì khó chịu hơn là bạn phân vân không lựa chọn được chiếc xe phù hợp. Đó là lý do tại sao chúng tôi có đội ngũ nhân viên xuất sắc trong việc tư vấn dịch vụ – và có thể thực hiện công việc đó một cách nhanh chóng.</p>

          <h3>KINH DOANH CÁC DÒNG XE CAO CẤP</h3>

          <div className="brand-list">
            <ul>
              <li>✔ Bugatti</li>
              <li>✔ Lamborghini</li>
              <li>✔ Ferrari</li>
              <li>✔ Bentley</li>
              <li>✔ Porsche</li>
              <li>✔ Lexus</li>
            </ul>

            <ul>
              <li>✔ Rolls Royce</li>
              <li>✔ Land Rover</li>
              <li>✔ Mercedes</li>
              <li>✔ BMW</li>
              <li>✔ Audi</li>
              <li>✔ Toyota</li>
            </ul>
          </div>

          <h3>CHĂM SÓC XE VÀ PHỦ CERAMIC</h3>
          <p>✔ Đem tới khách hàng một dịch vụ chăm sóc xe chuẩn cao cấp</p>
        </div>

        <div className="service-right">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
        </div>

      </div>

      {/* ===== BOOKING ===== */}
      <div className="booking">

        <div className="booking-form">
          <h2>ĐẶT LỊCH HẸN</h2>

          <div className="form-grid">

            <div>
              <input name="name" placeholder="Tên" onChange={handleChange} />
              <span className="error">{errors.name}</span>
            </div>

            <div>
              <input name="email" placeholder="Email" onChange={handleChange} />
              <span className="error">{errors.email}</span>
            </div>

            <div>
              <input name="phone" placeholder="Số điện thoại" onChange={handleChange} />
              <span className="error">{errors.phone}</span>
            </div>

            <div>
              <input name="model" placeholder="Make/Model" onChange={handleChange} />
              <span className="error">{errors.model}</span>
            </div>

            <div>
              <input name="km" placeholder="Km (tuỳ chọn)" onChange={handleChange} />
            </div>

            {/* 🔥 TIME PICKER */}
            <div className="time-input">
              <DatePicker
                selected={form.time}
                onChange={(date) =>
                  setForm((prev) => ({ ...prev, time: date }))
                }

                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                dateFormat="dd/MM/yyyy HH:mm"

                className="input-time"
                placeholderText="Chọn thời gian VIP"

                minDate={new Date()}
                filterDate={(date) => date.getDay() !== 0}

                minTime={minTime}
                maxTime={maxTime}

                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                
              />
              <span className="clock">🕒</span>
              <span className="error">{errors.time}</span>
            </div>

          </div>
<div className="booking-action">
  <button className="btn-book" onClick={handleSubmit}>
    ĐẶT LỊCH
  </button>

  <p className="booking-note">
    Bằng cách gửi biểu mẫu này, bạn sẽ được sắp xếp một cuộc hẹn khám dịch vụ
    mà không có nghĩa vụ gì và sẽ được cố vấn dịch vụ liên hệ trong vòng 48 giờ.
  </p>
</div>
        </div>

        {/* TIME BOX */}
        <div className="time-box">
          <h3>⏰ GIỜ LÀM VIỆC</h3>

          <div className="time-row">
            <span>SUNDAY</span>
            <span className="closed">CLOSED</span>
          </div>

          <div className="time-row"><span>MONDAY</span><span>8:00 - 17:30</span></div>
          <div className="time-row"><span>TUESDAY</span><span>8:00 - 17:30</span></div>
          <div className="time-row"><span>WEDNESDAY</span><span>8:00 - 17:30</span></div>
          <div className="time-row"><span>THURSDAY</span><span>8:00 - 17:30</span></div>
          <div className="time-row"><span>FRIDAY</span><span>8:00 - 17:30</span></div>
          <div className="time-row"><span>SATURDAY</span><span>8:00 - 17:30</span></div>
        </div>

      </div>

      {/* HOTLINE */}
      <div className="hotline">
        <span>❓ Hỗ trợ đặt lịch, tư vấn nhanh?</span>
        <span className="phone">📞 0935 64 6666</span>
      </div>

    </div>
  );
}

export default Service;