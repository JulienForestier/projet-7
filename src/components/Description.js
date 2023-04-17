import React from "react";
import Tag from "./Tag";
import Rate from "./Rate";

const Description = ({ logement }) => {
  return (
    <section className="description">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div className="description-header">
          <h2>{logement.title}</h2>
          <p>{logement.location}</p>
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
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "30px",
          marginTop: "10px",
        }}
      >
        <div className="tags">
          {logement.tags.map((tag) => {
            return <Tag content={tag} key={[tag]} />;
          })}
        </div>
        <Rate rate={logement.rating} />
      </div>
    </section>
  );
};

export default Description;
