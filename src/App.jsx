import { useState } from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import SearchSection from "./components/SearchSection/SearchSection";
import VehicleList from "./components/VehicleList/VehicleList";
import { vehicles } from "./carsData";

function App() {
  // 🔥 DATA GỐC
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);

  return (
    <div>
      <Header />
      <Navbar />
      <Banner />

      {/* 🔥 TRUYỀN DATA */}
      <SearchSection 
        vehicles={vehicles} 
        onSearch={setFilteredVehicles} 
      />

      {/* 🔥 NHẬN DATA */}
      <VehicleList vehicles={filteredVehicles} />
    </div>
  );
}

export default App;