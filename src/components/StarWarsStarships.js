import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

function StarWarsStarships({ id }) {
  const [starships, setStarships] = useState({});

  useEffect(() => {
    axios
      .get("https://swapi.co/api/starships/" + id + "/")
      .then(response => {
        setStarships(response.data);
      })
      .catch(() => navigate("/error"));
  }, [id]);

  return (
    <div>
      <h1>{starships.name}</h1>
      <p>
        <b>Pilots: </b>
        {starships.pilots}
      </p>
      <p>
        <b>Class: </b>
        {starships.starship_class}
      </p>
      <p>
        <b>Model: </b>
        {starships.model}
      </p>
      <p>
        <b>Manufacturer: </b>
        {starships.manufacturer}
      </p>
      <p>
        <b>Hyperdrive Rating: </b>
        {starships.hyperdrive_rating}
      </p>
    </div>
  );
}

export default StarWarsStarships;
