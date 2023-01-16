import React from "react";

const Cards = ({ results }) => {
  let display;
  if (results) {
    display = results.map((x) => {
      let { id, name, image, location, status } = x;
      return (
        <div key={id} className="col-4 position-relative">
          <div className="">
            <img src={image} alt="" className="img-fluid" />
            <div className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Last location</div>
                <div className="fs-6">{location.name}</div>
              </div>
            </div>
          </div>
          <div className="badge bg-danger">{status}</div>
        </div>
      );
    });
  } else {
    display = "No characters found";
  }

  return <>{display}</>;
};

export default Cards;
