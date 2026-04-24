import "./Banner.css";
import { useState, useEffect } from "react";

import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpg";
import banner5 from "../../assets/banner5.jpg";
import banner6 from "../../assets/banner6.jpg";

function Banner() {
  const images = [banner1, banner2, banner3, banner4, banner5, banner6];

  const [currentIndex, setCurrentIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 🔥 5s cho mượt

    return () => clearInterval(interval);
  }, []);

  // NEXT
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // PREV
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="banner">

      {/* TEXT */}


      {/* SLIDER */}
      <div className="hero-banner">
        <div
          className="slider"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((img, index) => (
            <img
              src={img}
              key={index}
              alt="car"
              className={index === currentIndex ? "active" : ""}
            />
          ))}
        </div>

        {/* PREV */}
        <button className="prev" onClick={prevSlide}>
          ❮
        </button>

        {/* NEXT */}
        <button className="next" onClick={nextSlide}>
          ❯
        </button>

        {/* DOTS */}
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? "dot active" : "dot"}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Banner;