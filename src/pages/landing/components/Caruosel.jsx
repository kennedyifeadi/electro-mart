import { useState, useEffect } from "react";
import "../landing.css";
import "./slider.css";
import airpod1 from "../../../assets/airpods-removebg-preview 1.png";
import airpod2 from "../../../assets/airpods 2.png";
import airpod3 from "../../../assets/airpods 3.png";
import airpod4 from "../../../assets/airpods 4.png";
import airpod5 from "../../../assets/freepik-export-20240905095811SeKW.png";

export const Carousel = () => {
  const slides = [
    {
      productName: "Airpods Pro 1",
      productImage: airpod1,
    },
    {
      productName: "Airpods Pro 2",
      productImage: airpod2,
    },
    {
      productName: "Airpods Pro 3",
      productImage: airpod3,
    },
    {
      productName: "Airpods Pro 4",
      productImage: airpod4,
    },
    {
      productName: "Airpods Pro 5",
      productImage: airpod5,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFadingOut(true); // Start fade-out animation
      setTimeout(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
        setIsFadingOut(false); // End fade-out animation
      }, 1000); // Match the transition time for smoother effect
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  const nextSlide = (currentSlide + 1) % slides.length;

  return (
    <div className="carouselContainer">
      <div className="podContainer">
        {/* Current Pod */}
        <div className={`currentPod ${isFadingOut ? "active" : ""}`}>
          <img
            src={slides[currentSlide].productImage}
            alt="Current Pod"
            className={`${isFadingOut ? "fadeOut" : "fadeIn"}`}
          />
          <h1 className={`podName ${isFadingOut ? "fadeOut" : "fadeIn"}`}>
            {slides[currentSlide].productName}
          </h1>
          <a href="#">View all</a>
        </div>

        {/* Next Pod (smaller and blurred) */}
        <div className={`nextPod ${!isFadingOut ? "active" : ""}`}>
          <img src={slides[nextSlide].productImage} alt="Next Pod" />
        </div>
      </div>
    </div>
  );
};


