import { useState } from "react";
import "./VehicleList.css";

function VehicleList({ vehicles }) {
  const [activeTab, setActiveTab] = useState("ALL");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [showBrand, setShowBrand] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  // 🔥 THÊM PHÂN TRANG
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // ===== DANH SÁCH BRAND =====
  const brands = [
    ...new Set(
      vehicles
        .filter((car) => car.type === activeTab)
        .map((car) => car.brand)
    ),
  ];

  // ===== FILTER =====
  const filteredCars = vehicles.filter((car) => {
    if (activeTab === "ALL") return true;

    return (
      car.type === activeTab &&
      (selectedBrand === "" || car.brand === selectedBrand)
    );
  });

  // ===== PHÂN TRANG =====
  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCars = filteredCars.slice(
    startIndex,
    startIndex + itemsPerPage
  );                   

  // ===== CLICK TAB =====
  const handleTabClick = (type) => {
    setActiveTab(type);
    setSelectedBrand("");
    setShowBrand(true);
    setCurrentPage(1); // 🔥 reset trang
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <div className="vehicle-section">

      {/* MENU */}
      <div className="menu-wrapper">
        {!showBrand && (
          <div className="tabs fade-in">
            <button onClick={() => {
              setActiveTab("ALL");
              setCurrentPage(1);
            }}>
              TOÀN BỘ XE
            </button>

            <button onClick={() => handleTabClick("Xe đã qua sử dụng")}>
              XE ĐÃ QUA SỬ DỤNG
            </button>

            <button onClick={() => handleTabClick("Xe mới")}>
              XE MỚI
            </button>

            <button>TÌM XE NHANH</button>
          </div>
        )}

        {showBrand && (
          <div className="brand-menu slide-down">
            {brands.map((brand) => (
              <button
                key={brand}
                className={selectedBrand === brand ? "active" : ""}
                onClick={() => {
                  setSelectedBrand(brand);
                  setCurrentPage(1); // 🔥 reset trang
                  setAnimationKey((prev) => prev + 1);
                }}
              >
                {brand}
              </button>
            ))}

            <button
              className="back-btn"
              onClick={() => {
                setShowBrand(false);
                setActiveTab("ALL");
                setSelectedBrand("");
                setCurrentPage(1);
                setAnimationKey((prev) => prev + 1);
              }}
            >
              ← Quay lại
            </button>
          </div>
        )}
      </div>

      {/* LIST */}
      <div
        key={animationKey}
        className="car-list slide-in-right"
      >
        {currentCars.map((car) => (
<div className="car-item" key={car.id}>
  <img src={car.image} alt={car.name} />

  <div className="car-info">
    <h3>{car.name}</h3>

    <p className="car-price">
      {car.price.toLocaleString()} đ
    </p>

    <button className="car-btn">
      🚗 XEM CHI TIẾT
    </button>
  </div>
</div>
        ))}
      </div>

      {/* ===== PAGINATION ===== */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>

    </div>
  );
} 

export default VehicleList;