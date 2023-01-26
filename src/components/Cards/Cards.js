import React from "react";
import styles from "./Cards.module.scss";

const Cards = ({ results }) => {
  let display;
  if (results) {
    display = results.map((x) => {
      let { id, name, image, location, status } = x;

      return (
        <div key={id} classNameName="col-4 mb-4 position-relative">
          <div classNameName={styles.cards}>
            <img src={image} alt="" classNameName={`${styles.img} img-fluid`} />
            <div style={{ padding: "10px" }} classNameName="content">
              <div classNameName="fs-4 fw-bold mb-4">{name}</div>
              <div classNameName="">
                <div classNameName="fs-6">Last location</div>
                <div classNameName="fs-6">{location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  classNameName={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  classNameName={`${styles.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  classNameName={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </div>
      );
    });
  } else {
    display = "No characters found";
  }

  return <>{display}</>;
};

export default Cards;
