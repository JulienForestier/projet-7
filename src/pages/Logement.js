import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import logements from "../assets/logements.json";
import Description from "../components/Description";
import Menu2 from "../components/Menu-2";
import Menu from "../components/Menu";

const Logement = () => {
  const { id } = useParams();
  const logement = logements.find((location) => location.id === id);
  return (
    <div>
      <Header />
      <Carousel length={logement.pictures.length} images={logement.pictures} />
      <Description logement={logement} />
      <div className="container">
        <div style={{ width: "50%" }}>
          <Menu title="Description" content={logement.description} size="18" />
        </div>
        <div
          style={{ width: "50%", display: "flex", justifyContent: "flex-end" }}
        >
          <Menu2 title="Équipements" content={logement.equipments} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Logement;
