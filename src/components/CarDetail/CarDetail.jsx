import "./CarDetail.css";
import { useParams } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CarDetail({ vehicles, addToCart }) {
  const { id } = useParams();

  const car = useMemo(
    () => vehicles.find((c) => c.id === Number(id)),
    [vehicles, id]
  );

  const images = useMemo(() => {
    if (!car) return [];
    if (Array.isArray(car.images) && car.images.length) return car.images;
    return car.image ? [car.image] : [];
  }, [car]);
  const flyToCart = (e) => {
  const img = document.querySelector(".main-image img");
  const cart = document.querySelector(".cart-icon");

  if (!img || !cart) return;

  const imgRect = img.getBoundingClientRect();
  const cartRect = cart.getBoundingClientRect();

  const flyingImg = img.cloneNode(true);

  flyingImg.style.position = "fixed";
  flyingImg.style.left = imgRect.left + "px";
  flyingImg.style.top = imgRect.top + "px";
  flyingImg.style.width = imgRect.width + "px";
  flyingImg.style.height = imgRect.height + "px";
  flyingImg.style.zIndex = 9999;
  flyingImg.style.transition = "all 0.8s cubic-bezier(.4,-0.3,1,.68)";
  flyingImg.style.borderRadius = "12px";

  document.body.appendChild(flyingImg);

  setTimeout(() => {
    flyingImg.style.left = cartRect.left + "px";
    flyingImg.style.top = cartRect.top + "px";
    flyingImg.style.width = "40px";
    flyingImg.style.height = "40px";
    flyingImg.style.opacity = "0.5";
  }, 50);

  setTimeout(() => {
    flyingImg.remove();
  }, 800);
};

  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    if (images.length) setMainImage(images[0]);
  }, [images]);
  const [showBooking, setShowBooking] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [time, setTime] = useState(null);

  const [bookingError, setBookingError] = useState("");
  const [contactError, setContactError] = useState({});
  const [contactData, setContactData] = useState({ name: "", phone: "" });


  if (!car) {
    return (
      <div className="car-detail empty">
        <h2>Không tìm thấy xe</h2>
      </div>
    );
  }

  return (
    <div className="car-detail">

      {/* ===== GALLERY ===== */}
      <div className="gallery">
        <div className="main-image">
          {mainImage && <img src={mainImage} alt={car.name} />}
        </div>

        <div className="thumbs">
          {images.map((img, i) => (
            <button
              key={i}
              className={`thumb ${mainImage === img ? "active" : ""}`}
              onClick={() => setMainImage(img)}
            >
              <img src={img} alt="" />
            </button>
          ))}
        </div>
      </div>

      {/* ===== HEADER ===== */}
      <div className="detail-header center">
        <h1 className="title">{car.name}</h1>

        <div className="rating">
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className={car.rating >= star ? "star full" : "star"}>
                ★
              </span>
            ))}
          </div>
          <span className="rating-number">{car.rating}</span>
        </div>

        <p className="price">
          {car.price?.toLocaleString("vi-VN")} đ
        </p>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="detail-content">

        <div className="left">
          <h2>Mô tả</h2>
          <p className="desc">
            {car.description || "Xe cao cấp..."}
          </p>

          <div className="specs">
            <div><span>Hãng:</span> {car.brand}</div>
            <div><span>Loại:</span> {car.type}</div>
            <div><span>Năm:</span> {car.year || "2024"}</div>
            <div><span>Nhiên liệu:</span> {car.specs?.fuel || "Xăng"}</div>
            <div><span>Hộp số:</span> {car.specs?.transmission || "Tự động"}</div>
          </div>
        </div>

        <div className="right">
          <div className="contact-box">
            <h3>Liên hệ tư vấn</h3>
            <p>📞 0962 195 796</p>

<button
  className="buy-btn"
  onClick={(e) => {
    console.log("CLICK OK");

    flyToCart(e);

    addToCart({
      id: car.id,
      name: car.name,
      price: Number(car.price),
      image: car.image || car.images?.[0],
    });
  }}
>
  🚗 MUA XE NGAY
</button>

            <button
              className="primary"
              onClick={() => {
                setTime(null);
                setBookingError("");
                setShowBooking(true);
              }}
            >
              ĐẶT LỊCH XEM XE
            </button>

            <button
              className="outline"
              onClick={() => {
                setContactData({ name: "", phone: "" });
                setContactError({});
                setShowContact(true);
              }}
            >
              LIÊN HỆ
            </button>
          </div>
        </div>

      </div>

      {/* ===== BOOKING ===== */}
      <div className={`overlay ${showBooking ? "show" : ""}`}>
        <div className="modal zoom">
          <span className="close" onClick={() => {
            setShowBooking(false);
            setTime(null);
            setBookingError("");
          }}>✕</span>

          <h2>Đặt lịch xem xe</h2>
          <p className="car-name">{car.name}</p>

          <DatePicker
            selected={time}
            onChange={(date) => setTime(date)}
            showTimeSelect
            dateFormat="dd/MM/yyyy HH:mm"
            placeholderText="Chọn thời gian"
          />

          <span className="error">{bookingError}</span>

          <button
            className="confirm"
            onClick={() => {
              if (!time) {
                setBookingError("Vui lòng chọn thời gian");
                return;
              }

              setBookingError("");
              setShowSuccess(true);
              setShowBooking(false);
              setTime(null);
            }}
          >
            XÁC NHẬN
          </button>
        </div>
      </div>

      {/* ===== CONTACT ===== */}
      <div className={`overlay ${showContact ? "show" : ""}`}>
        <div className="modal zoom">
          <span className="close" onClick={() => {
            setShowContact(false);
            setContactData({ name: "", phone: "" });
            setContactError({});
          }}>✕</span>

          <h2>Liên hệ tư vấn</h2>

          {/* 🔥 FIX DUY NHẤT */}
          <input
            placeholder="Tên của bạn"
            value={contactData.name}
            onChange={(e) =>
              setContactData({ ...contactData, name: e.target.value })
            }
          />
          <span className="error">{contactError.name}</span>

          <input
            placeholder="Số điện thoại"
            value={contactData.phone}
            onChange={(e) =>
              setContactData({ ...contactData, phone: e.target.value })
            }
          />
          <span className="error">{contactError.phone}</span>

          <button
            className="confirm"
            onClick={() => {
              let err = {};
              if (!contactData.name) err.name = "Nhập tên";
              if (!contactData.phone) err.phone = "Nhập số điện thoại";

              if (Object.keys(err).length > 0) {
                setContactError(err);
                return;
              }

              setContactError({});
              setShowSuccess(true);
              setShowContact(false);
              setContactData({ name: "", phone: "" });
            }}
          >
            GỬI
          </button>
        </div>
      </div>

      {/* ===== SUCCESS POPUP ===== */}
      <div className={`overlay ${showSuccess ? "show" : ""}`}>
        <div className="popup-2col">

          <div className="popup-left">
            <span className="close" onClick={() => setShowSuccess(false)}>✕</span>

            <h3>Thành công!</h3>
            <p>Yêu cầu của bạn đã được gửi.</p>
            <p>Được phục vụ bạn là niềm vui đối với chúng tôi</p>

            <button
              onClick={() => {
                setShowSuccess(false);
                setContactData({ name: "", phone: "" });
                setContactError({});
                setTime(null);
                setBookingError("");
              }}
            >
              TIẾP TỤC
            </button>
          </div>

          <div className="popup-right">
            <img
              src="https://th.bing.com/th/id/OIP.QT8rmXxGH89FwBXyDfQsZgHaFr?w=226&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
              alt="car"
            />
          </div>

        </div>
      </div>

    </div>
  );
}

export default CarDetail;