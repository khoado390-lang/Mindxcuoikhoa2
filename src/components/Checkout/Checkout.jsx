import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout({ cart }) {
  const navigate = useNavigate();

  // ===== FORM =====
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  // ===== PAYMENT =====
  const [payment, setPayment] = useState("cod");

  // ===== CARD =====
  const [card, setCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });

  // ===== ERROR =====
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // ===== TOTAL =====
  const total = cart.reduce((t, i) => t + i.price * i.quantity, 0);

  // ===== FORMAT CARD =====
  const formatCard = (value) =>
    value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim();

  const handleCard = (e) => {
    const { name, value } = e.target;

    if (name === "number") {
      setCard({ ...card, number: formatCard(value) });
    } else if (name === "expiry") {
      let v = value.replace(/\D/g, "");
      if (v.length >= 3) v = v.slice(0, 2) + "/" + v.slice(2, 4);
      setCard({ ...card, expiry: v });
    } else {
      setCard({ ...card, [name]: value });
    }
  };

  // ===== VALIDATE =====
  const validate = () => {
    const newErrors = {};

    if (!form.name) newErrors.name = "Vui lòng nhập họ tên";
    if (!form.phone) newErrors.phone = "Vui lòng nhập SĐT";
    if (!form.address) newErrors.address = "Vui lòng nhập địa chỉ";

    if (payment === "card") {
      if (!card.number) newErrors.cardNumber = "Nhập số thẻ";
      if (!card.name) newErrors.cardName = "Nhập tên trên thẻ";
      if (!card.expiry) newErrors.expiry = "Nhập ngày hết hạn";
      if (!card.cvc) newErrors.cvc = "Nhập CVC";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ===== SUBMIT =====
  const handleSubmit = () => {
    if (!validate()) return;

saveOrder(); 

    setSuccess(true);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  // ===== CARD TYPE =====
  const getCardType = () => {
    if (card.number.startsWith("4")) return "VISA";
    if (card.number.startsWith("5")) return "MASTERCARD";
    return "";
  };
  const saveOrder = () => {
  const oldOrders = JSON.parse(localStorage.getItem("orders")) || [];

  const newOrder = {
    id: "DH" + Date.now(),
    items: cart,
    total: total,
    date: new Date().toLocaleString()
  };

  localStorage.setItem("orders", JSON.stringify([...oldOrders, newOrder]));
};

  return (
    <div className="checkout-page">

      {/* LEFT */}
      <div className="checkout-left">

        <h2>Thanh toán</h2>

        {/* NAME */}
        <input
          placeholder="Họ tên"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        {/* PHONE */}
        <input
          placeholder="SĐT"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        {/* ADDRESS */}
        <input
          placeholder="Địa chỉ"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />
        {errors.address && <p className="error">{errors.address}</p>}

        {/* PAYMENT */}
        <div className="payment-method">

          <label className="payment-item">
            <span>Thanh toán khi nhận hàng</span>
            <input
              type="radio"
              checked={payment === "cod"}
              onChange={() => setPayment("cod")}
            />
          </label>

          <label className="payment-item">
            <span>💳 Visa / Mastercard</span>
            <input
              type="radio"
              checked={payment === "card"}
              onChange={() => setPayment("card")}
            />
          </label>

        </div>

        {/* CARD */}
        {payment === "card" && (
          <div className="card-box">

            <div className="card-preview">
              <div className="card-logo">{getCardType()}</div>
              <p>{card.number || "•••• •••• •••• ••••"}</p>
              <span>{card.name || "CARD HOLDER"}</span>

              <div className="card-bottom">
                <small>{card.expiry || "MM/YY"}</small>
                <small>***</small>
              </div>
            </div>

            <input
              name="number"
              placeholder="Số thẻ"
              value={card.number}
              onChange={handleCard}
            />
            {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}

            <input
              name="name"
              placeholder="Tên trên thẻ"
              value={card.name}
              onChange={handleCard}
            />
            {errors.cardName && <p className="error">{errors.cardName}</p>}

            <div className="row">

  {/* EXPIRY */}
  <div className="field">
    <input
      name="expiry"
      placeholder="MM/YY"
      value={card.expiry}
      onChange={handleCard}
    />
    {errors.expiry && <p className="error">{errors.expiry}</p>}
  </div>

  {/* CVC */}
  <div className="field">
    <input
      name="cvc"
      placeholder="CVC"
      value={card.cvc}
      onChange={handleCard}
    />
    {errors.cvc && <p className="error">{errors.cvc}</p>}
  </div>

</div>
          </div>
        )}

        {/* BUTTON */}
        <button className="checkout-btn" onClick={handleSubmit}>
          THANH TOÁN
        </button>

        {/* SUCCESS */}
        {success && (
          <div className="success">
            🎉 Thanh toán thành công
          </div>
        )}

      </div>

      {/* RIGHT */}
      <div className="checkout-right">
        <h3>Đơn hàng</h3>

        {cart.map((item) => (
          <div key={item.id} className="order-item">
            <img src={item.image} alt="" />
            <div>
              <p>{item.name}</p>
              <small>
                {item.quantity} x {item.price.toLocaleString()} đ
              </small>
            </div>
          </div>
        ))}

        <div className="total">
          Tổng: {total.toLocaleString()} đ
        </div>
      </div>

    </div>
  );
}

export default Checkout;