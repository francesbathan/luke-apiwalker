import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

function StarWarsPlanets({ id }) {
  const [planets, setPlanets] = useState({});

  useEffect(() => {
    axios
      .get("https://swapi.co/api/planets/" + id + "/")
      .then(response => {
        setPlanets(response.data);
      })
      .catch(() => navigate("/error"));
  }, [id]);

  return (
    <div>
      <h1>{planets.name}</h1>
      <p>
        <b>Climate: </b>
        {planets.climate}
      </p>
      <p>
        <b>Terrain: </b>
        {planets.terrain}
      </p>
      <p>
        <b>Surface Water: </b>
        {planets.surface_water}
      </p>
      <p>
        <b>Population: </b>
        {planets.population}
      </p>
    </div>
  );
}

export default StarWarsPlanets;
