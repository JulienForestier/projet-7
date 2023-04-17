import React from "react";

const Rate = ({ rate }) => {
  const totalStars = 5;
  const activeStars = rate;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      {[...new Array(totalStars)].map((arr, index) => {
        return index < activeStars ? (
          <img
            src="/images/star2.svg"
            style={{ margin: "0 5px" }}
            key={index}
          />
        ) : (
          <img src="/images/Star.svg" style={{ margin: "0 5px" }} key={index} />
        );
      })}
    </div>
  );
};

export default Rate;
