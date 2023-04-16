import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import logements from "../assets/logements.json";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner
        src={"./images/banner.svg"}
        alt={"photographie des cotes"}
        text={"Chez vous, partout et ailleurs"}
      />
      <div className="card-container">
        {logements.map((logement) => {
          return <Card key={logement.id} logement={logement} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
