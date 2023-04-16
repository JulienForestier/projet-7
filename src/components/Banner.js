import React from "react";

const Banner = ({ src, alt, text }) => {
  return (
    <div className="banner">
      <img src={src} alt={alt} />
      <p>{text}</p>
    </div>
  );
};

export default Banner;
