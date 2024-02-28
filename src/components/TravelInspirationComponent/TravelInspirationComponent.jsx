import React, { useEffect, useState } from "react";
import {
  meses,
  getSeason,
  getImagesBySeason,
  getAdsMonth,
} from "../../helpers";
import "./style.css";

function TravelInspirationComponent() {
  const date = new Date();
  const [adsMonth, setAdsMonth] = useState(getAdsMonth());
  const [season, setSeason] = useState(getSeason(adsMonth));
  const [images, setImages] = useState(getImagesBySeason(season) || []);

  /* Carrousel */
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLHovered, setIsLHovered] = useState(false);
  const [isRHovered, setIsRHovered] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      {images && images.length > 0 && (
        <div className="carouselContainer">
          <h2 id="adText">{`¿Dónde vas a irte en ${adsMonth}?`}</h2>
          <div
            className="carouselTrack"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="slide">
                <img src={image} alt={`Imagen ${index + 1} de ${season}`} />
                <button onClick={() => console.log("Clic en el botón")}>
                  Clic aquí
                </button>
              </div>
            ))}
          </div>

          {/* FLECHAS */}
          {images?.length > 1 && (
            <div
              className={`arrowLeft ${isLHovered ? "hovered" : ""}`}
              onClick={handlePrev}
              onMouseEnter={() => setIsLHovered(true)}
              onMouseLeave={() => setIsLHovered(false)}
            ></div>
          )}

          {images?.length > 1 && (
            <div
              className={`arrowRight ${isRHovered ? "hovered" : ""}`}
              onClick={handleNext}
              onMouseEnter={() => setIsRHovered(true)}
              onMouseLeave={() => setIsRHovered(false)}
            ></div>
          )}
        </div>
      )}
    </>
  );
}

export default TravelInspirationComponent;
