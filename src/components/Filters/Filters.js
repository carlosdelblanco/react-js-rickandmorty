import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = () => {
  return (
    <div classNameName="col-3">
      <div classNameName="text-center fw-bold fs-4 mb-2">Filter</div>
      <div
        style={{ cursor: "pointer" }}
        classNameName="text-center text-primary text-decoration-underline"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status />
        <Species />
        <Gender />
      </div>
    </div>
  );
};

export default Filters;
