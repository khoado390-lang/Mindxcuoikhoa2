// src/components/Orders/Orders.jsx
import "./Orders.css";

function Orders() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="orders">

      <h2>Quản lý đơn hàng của bạn</h2>
      <p>Xem chi tiết, trạng thái của những đơn hàng đã đặt.</p>

      {orders.length === 0 ? (
        <div className="empty-order">
          <img src="/empty-order.png" alt="" />
          <p>Chưa có đơn hàng nào</p>
        </div>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="order-item">
            <p>Mã đơn: {order.id}</p>
            <p>Tổng tiền: {order.total.toLocaleString()} đ</p>
          </div>
        ))
      )}

    </div>
  );
}

export default Orders;