import React from "react";
import "./App.css";

import { Router } from "@reach/router";

/*VIEWS*/
import Index from "./views/Index";

/*COMPONENTS*/
import StarWarsPeople from "./components/StarWarsPeople";
import StarWarsSpecies from "./components/StarWarsSpecies";
import StarWarsPlanets from "./components/StarWarsPlanets";
import StarWarsStarships from "./components/StarWarsStarships";
import StarWarsFilms from "./components/StarWarsFilms";
import Error from "./components/Error";

/******************APP****************/

function App() {
  return (
    <div className="App">
      <Index />
      <Router>
        <StarWarsPeople path="/people/:id" />
        <StarWarsSpecies path="/species/:id" />
        <StarWarsPlanets path="/planets/:id" />
        <StarWarsStarships path="/starships/:id" />
        <StarWarsFilms path="/films/:id" />
        <Error path="/error" />
      </Router>
    </div>
  );
}

export default App;
