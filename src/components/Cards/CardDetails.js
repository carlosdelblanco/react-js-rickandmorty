import React from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  let { id } = useParams();
  return <div>the details from the card are here - {id}</div>;
};

export default CardDetails;
