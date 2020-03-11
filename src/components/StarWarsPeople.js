import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import Homeworld from "./Homeworld";

function StarWarsPeople({ id }) {
  const [people, setPeople] = useState(null);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/" + id + "/")
      .then(response => {
        setPeople(response.data);
      })
      .catch(() => navigate("/error"));
  }, [id]);

  if (people == null) {
    return "Loading...";
  }

  return (
    <div>
      <h1>{people.name}</h1>
      <p>
        <b>Height: </b>
        {people.height}
      </p>
      <p>
        <b>Hair Color: </b>
        {people.hair_color}
      </p>
      <p>
        <b>Eye Color: </b>
        {people.eye_color}
      </p>
      <p>
        <b>Skin Color: </b>
        {people.skin_color}
      </p>
      <Homeworld url={people.homeworld} />
    </div>
  );
}

export default StarWarsPeople;
