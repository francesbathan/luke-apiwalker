import React, { useEffect, useState } from "react";
import axios from "axios";
// import { navigate } from "@reach/router";

function Homeworld({ url }) {
  const [planets, setPlanets] = useState({});
  console.log(url);

  useEffect(() => {
    axios.get(url).then(response => {
      setPlanets(response.data);
    });
  }, [url]);

  return (
    <div>
      <p>
        <b>Homeworld: </b>
        {planets.name}
      </p>
    </div>
  );
}

export default Homeworld;
