/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  let { id } = useParams();
  let [fetchedData, updateFetchedData] = useState([]);
  let { name, image, location, origin, gender, species, status, type } =
    fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());

      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center">
      <div className="">
        <h1 className="">{name}</h1>
        <img src="image" alt="" className="" />
      </div>
    </div>
  );
};

export default CardDetails;
