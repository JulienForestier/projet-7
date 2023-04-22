import React, { useState } from "react";

const Carousel = ({ length, images }) => {
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div>
      {length > 1 && (
        <div className="carousel">
          <button onClick={handlePrevious}>
            <img src="/images/carousel-button.svg" alt="fléche directrice" />
          </button>
          <button onClick={handleNext}>
            <img src="/images/carousel-button.svg" alt="fléche directrice" />
          </button>
          <img src={images[index]} alt="différentes piéces du logement" />
        </div>
      )}
      {length <= 1 && (
        <div className="carousel">
          <img src={images[index]} alt="différentes piéces du logement" />
        </div>
      )}
    </div>
  );
};

export default Carousel;
