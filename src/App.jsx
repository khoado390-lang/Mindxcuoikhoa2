import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import SearchSection from "./components/SearchSection/SearchSection";
import VehicleList from "./components/VehicleList/VehicleList";
import ShowroomVideo from "./components/ShowroomVideo/ShowroomVideo";
import Footer from "./components/Footer/Footer";
import CarDetail from "./components/CarDetail/CarDetail";
import About from "./components/About/About";
import Account from "./components/Account/Account";
import Service from "./components/Service/Service";
import Checkout from "./components/Checkout/Checkout";

import { vehicles } from "./carsData";

import "./App.css";
import Orders from "./components/Orders/Orders";

function App() {
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);

  // 🔥 CART GLOBAL
  const [cart, setCart] = useState([]);

  // 🔥 FUNCTION ADD TO CART
  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const newCars = vehicles.filter(
    (car) => car.type === "Xe mới"
  );

  const usedCars = vehicles.filter(
    (car) => car.type === "Xe đã qua sử dụng"
  );

  return (
    <Router>

      {/* 🔥 TRUYỀN CART */}
      <Header cart={cart} setCart={setCart} />

      <Navbar />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Banner />

              <SearchSection
                vehicles={vehicles}
                onSearch={setFilteredVehicles}
              />

              <VehicleList vehicles={filteredVehicles} />
              <ShowroomVideo />
            </>
          }
        />

        {/* ABOUT */}
        <Route path="/about" element={<About />} />

        {/* SERVICE */}
        <Route path="/service" element={<Service />} />

        {/* ACCOUNT */}
        <Route path="/account" element={<Account />} />

        {/* NEW CARS */}
        <Route
          path="/new-cars"
          element={
            <div className="luxury-page">
              <div className="luxury-hero">
                <h1>XE MỚI CAO CẤP</h1>
                <p>
                  Bộ sưu tập xe mới nhất – công nghệ hiện đại – đẳng cấp thượng lưu
                </p>
              </div>

              <VehicleList
                vehicles={newCars}
                hideMenu={true}
              />
            </div>
          }
        />

        {/* USED CARS */}
        <Route
          path="/used-cars"
          element={
            <div className="luxury-page">
              <div className="luxury-hero">
                <h1>XE ĐÃ QUA SỬ DỤNG</h1>
                <p>
                  Xe đã kiểm định – chất lượng cao – giá trị vượt trội
                </p>
              </div>

              <VehicleList
                vehicles={usedCars}
                hideMenu={true}
              />
            </div>
          }
        />

        {/* DETAIL 🔥 */}
        <Route
          path="/car/:id"
          element={
            <CarDetail
              vehicles={vehicles}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} />}
        />
        <Route path="/orders" element={<Orders />} />
<Route
  path="/checkout"
  element={
    <Checkout
      cart={cart}
      setCart={setCart}
    />
  }
/>
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;