import React from "react";
import Tag from "./Tag";

const Description = ({ logement }) => {
  return (
    <section className="description">
      <div className="description-header">
        <h2>{logement.title}</h2>
        <p>{logement.location}</p>
        <Tag />
      </div>
      <div className="host">
        <div>
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt="photographie du propriétaire" />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Description;
