import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


function PlantPage( { getPlant, setPlant } ) {


  const [getFilter, setFilter] = useState("")
  console.log(getFilter)

  return (
    <main>
      <NewPlantForm setPlant={setPlant}/>
      <Search setFilter={setFilter}/>
      <PlantList getFilter={getFilter} getPlant={getPlant} setPlant={setPlant}  />
    </main>
  );
}

export default PlantPage;
