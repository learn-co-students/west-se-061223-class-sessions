import React, { useState } from "react";
import EditPlantForm from "./EditPlantForm";

function PlantCard({id, image, name, price, onUpdatePlant}) {
  const [isInStock, setIsInStock] = useState(true)

  const toggleInStock = () => setIsInStock(isInStock => !isInStock)

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button onClick={toggleInStock} className="primary">In Stock</button>
      ) : (
        <button onClick={toggleInStock} >Out of Stock</button>
      )}
      <EditPlantForm id={id} price={price} onUpdatePlant={onUpdatePlant} />
    </li>
  );
}

export default PlantCard;
