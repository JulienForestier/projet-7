import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Menu from "../components/Menu";

const About = () => {
  return (
    <div className="layout">
      <Header />
      <Banner
        src={"./images/banner-about.svg"}
        alt={"Photographie de montagnes"}
      />
      <div className="menu-container">
        <Menu
          title={"Fiabilité"}
          content={
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          }
        />
        <Menu
          title={"Respect"}
          content={
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          }
        />
        <Menu
          title={"Service"}
          content={
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          }
        />
        <Menu
          title={"Sécurité"}
          content={
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          }
        />
      </div>
      <Footer />
    </div>
  );
};

export default About;
