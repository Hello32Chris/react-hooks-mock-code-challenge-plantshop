import React, { useState } from "react";

function PlantCard( { name, image, price } ) {

  const [getSoldout, setSoldout] = useState(true)

  function changeButton() {
    return setSoldout(!getSoldout)
  }
  


  return (
    <li className="card">
      <img src={image} alt={`This is the ${name} plant`} title={`This is the ${name} plant`} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>

      <button className="primary" onClick={changeButton}>{getSoldout ? "In Stock": "Out of Stock"}</button>
    </li>
  );
}

export default PlantCard;


//make the button change color when out of stock for fun
