import React from "react";

const Cards = ({ results }) => {
  let display;
  if (results) {
    display = results.map((x) => {
      return <div className="col-4"></div>;
    });
  } else {
    display = "No characters found";
  }

  return <>{display}</>;
};

export default Cards;
