import React, { useState } from "react";
import PlantCard from "./PlantCard";



function PlantList( { getFilter, getPlant, setPlant } ) {

  const filteredPlants = getPlant.filter((plant) => {
    if (plant.name.toLowerCase().includes(getFilter.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  })

  const plants = filteredPlants.map((plant) => {
    return <PlantCard 
      key={plant.image}
      name={plant.name}
      image={plant.image}
      price={plant.price}
    />
  })

  return (
    <ul className="cards">{plants}</ul>
  );
}

export default PlantList;
