import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [getPlant, setPlant] = useState([])

  console.log(getPlant)

  useEffect(() => {
  fetch("http://localhost:6001/plants")
    .then((resp) => resp.json())
    .then((data) => setPlant(data))
  }, [])

  return (
    <div className="app">
      <Header />
      <PlantPage getPlant={getPlant} setPlant={setPlant}  />
    </div>
  );
}

export default App;