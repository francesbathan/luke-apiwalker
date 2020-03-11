import React, { useState } from "react";
import { navigate } from "@reach/router";

function Index() {
  const [formState, setFormState] = useState({
    options: "people",
    id: ""
  });

  function optionHandler(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
    console.log(formState);
  }

  function inputHandler(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  }

  function searchSubmit(event) {
    event.preventDefault();
    navigate("/" + formState.options + "/" + formState.id);
  }

  return (
    <form onSubmit={searchSubmit}>
      <label>
        Search for:
        <select
          name="options"
          onChange={optionHandler}
          value={formState.options}
        >
          <option value="people">People</option>
          <option value="species">Species</option>
          <option value="planets">Planets</option>
          <option value="starships">Starships</option>
          <option value="films">Films</option>
        </select>
      </label>
      <label>
        ID:
        <input name="id" onChange={inputHandler} />
      </label>
      <button>Search</button>
    </form>
  );
}

export default Index;
