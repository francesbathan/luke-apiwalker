import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

function StarWarsFilms({ id }) {
  const [films, setFilms] = useState({});

  useEffect(() => {
    axios
      .get("https://swapi.co/api/films/" + id + "/")
      .then(response => {
        setFilms(response.data);
      })
      .catch(() => navigate("/error"));
  }, [id]);

  return (
    <div>
      <h1>{films.title}</h1>
      <p>
        <b>Director: </b>
        {films.director}
      </p>
      <p>
        <b>Episode: </b>
        {films.episode_id}
      </p>
      <p>
        <b>Release Date: </b>
        {films.release_date}
      </p>
      <p>
        <b>Opening Crawl: </b>
        <p>{films.opening_crawl}</p>
      </p>
    </div>
  );
}

export default StarWarsFilms;
