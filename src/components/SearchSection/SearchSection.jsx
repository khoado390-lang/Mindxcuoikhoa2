import { useState, useEffect } from "react";
import "./SearchSection.css";

function SearchSection({ vehicles = [], onSearch}) {
  const [showFilter, setShowFilter] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const brands = [...new Set(vehicles.map((v) => v.brand))];

  useEffect(() => {
    let result = vehicles.filter((car) => {
      return (
        (car.name.toLowerCase().includes(keyword.toLowerCase()) ||
          car.brand.toLowerCase().includes(keyword.toLowerCase())) &&
        (type === "" || car.type === type) &&
        (brand === "" || car.brand === brand)
      );
    });

    if (priceRange !== "") {
      const [min, max] = priceRange.split("-").map(Number);

      result = result.filter((car) => {
        if (max) return car.price >= min && car.price <= max;
        return car.price >= min;
      });
    }

    onSearch(result);
  }, [keyword, type, brand, priceRange, vehicles]); 

  const handleReset = () => {
    setKeyword("");
    setType("");
    setBrand("");
    setPriceRange("");
    onSearch(vehicles);
  };

  return (
    <div className="search-section">
      <h2>TÌM KIẾM XE NHANH</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Nhập tên xe (vd: audi...)"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <span
          className="search-icon"
          onClick={() => setShowFilter(!showFilter)}
        >
          ⚙️
        </span>
      </div>

      {showFilter && (
        <>
          <div className="search-filter">

            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">Loại xe</option>
              <option value="Xe mới">Xe mới</option>
              <option value="Xe đã qua sử dụng">Xe cũ</option>
            </select>

            <select value={brand} onChange={(e) => setBrand(e.target.value)}>
              <option value="">Hãng xe</option>
              {brands.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>

            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="">Giá</option>
              <option value="0-1000000000">Dưới 1 tỷ</option>
              <option value="1000000000-3000000000">1 - 3 tỷ</option>
              <option value="3000000000-7000000000">3 - 7 tỷ</option>
              <option value="7000000000">Trên 7 tỷ</option>
            </select>

            <button className="btn-search">
              🔍 SEARCH
            </button>

            <button className="btn-reset" onClick={handleReset}>
              ↻ RESET
            </button>
          </div>

          <div className="contact-banner">
            <span>❓ Bạn muốn tìm xe?</span>
            <span>📞 0962.195.796</span>
          </div>
        </>
      )}
    </div>
  );
}

export default SearchSection;