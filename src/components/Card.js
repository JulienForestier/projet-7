import React from "react";
import { Link } from "react-router-dom";

const Card = ({ logement }) => {
  return (
    <div className="card">
      <Link to={"/logement/" + logement.id}>
        <img src={logement.cover} alt={"photo du " + logement.title} />
        <p>{logement.title}</p>
      </Link>
    </div>
  );
};

export default Card;
