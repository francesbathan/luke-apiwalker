import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import Homeworld from "./Homeworld";

function StarWarsSpecies({ id }) {
  const [species, setSpecies] = useState({});

  useEffect(() => {
    axios
      .get("https://swapi.co/api/species/" + id + "/")
      .then(response => {
        setSpecies(response.data);
      })
      .catch(() => navigate("/error"));
  }, [id]);

  if (species == null) {
    return "Loading...";
  }

  return (
    <div>
      <h1>{species.name}</h1>
      <p>
        <b>Language: </b>
        {species.language}
      </p>
      <p>
        <Homeworld url={species.homeworld} />
      </p>
      <p>
        <b>Designation: </b>
        {species.designation}
      </p>
      <p>
        <b>Classification: </b>
        {species.classification}
      </p>
      <p>
        <b>Skin Colors: </b>
        <p>{species.skin_colors}</p>
      </p>
      <p>
        <b>Eye Colors: </b>
        <p>{species.eye_colors}</p>
      </p>
      <p>
        <b>Hair Colors: </b>
        <p>{species.hair_colors}</p>
      </p>
    </div>
  );
}

export default StarWarsSpecies;
