import React from "react";
import Tag from "./Tag";
import Rate from "./Rate";

const Description = ({ logement }) => {
  return (
    <section className="description">
      <div className="description-header">
        <h2>{logement.title}</h2>
        <p>{logement.location}</p>
        <div className="tags">
          {logement.tags.map((tag) => {
            return <Tag content={tag} key={[tag]} />;
          })}
        </div>
      </div>

      <div className="host">
        <div>
          <p>{logement.host.name}</p>
          <img
            src={logement.host.picture}
            alt="photographie du propriétaire"
            style={{ height: "80px" }}
          />
        </div>
        <div className="rate">
          <Rate rate={logement.rating} />
        </div>
      </div>
    </section>
  );
};

export default Description;
