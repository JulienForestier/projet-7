import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src="/images/LOGO.svg" alt="logo du site Kanap" />
      <Navigation />
    </div>
  );
};

export default Header;
