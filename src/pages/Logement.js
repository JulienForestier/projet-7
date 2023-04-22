import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import logements from "../assets/logements.json";
import Description from "../components/Description";
import Menu2 from "../components/Menu-2";
import Menu from "../components/Menu";

const Logement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);
  useEffect(() => {
    const logement_ = logements.find((location) => location.id === id);
    if (!logement_) {
      navigate("/logementintrouvable");
    } else setLogement(logement_);
  }, [id, navigate]);

  return (
    <div>
      {logement && (
        <div className="layout">
          <Header />
          <Carousel
            length={logement.pictures.length}
            images={logement.pictures}
          />
          <Description logement={logement} />
          <div className="container">
            <div className="container-menu">
              <Menu title="Description" content={logement.description} />
            </div>
            <div className="container-menu equipment">
              <Menu2 title="Équipements" content={logement.equipments} />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Logement;
