import React, { useState } from "react";
import EditPlantForm from "./EditPlantForm";

function PlantCard({ 
  id, 
  image, 
  name, 
  price, 
  onUpdatePlant, 
  onDeletePlant 
}) {
  const [isInStock, setIsInStock] = useState(true);
  const [isShowEdit, setIsShowEdit] = useState(false); // not in deliverables, but we will hide the EditPlantForm

  const toggleInStock = () => setIsInStock((isInStock) => !isInStock);

  const deletePlant = () => {
    // delete from the backend (the repsonse is just an empty {})
    fetch(`http://localhost:6001/plants/${id}`, { method: "DELETE" })
      .then(() =>
      onDeletePlant(id)
    ); // send the id up to PlantPage so we can remove the plant from state
  };

  return (
    <li className="card">
      <img
        src={image}
        alt={name}
      />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button
          onClick={toggleInStock}
          className="primary"
        >
          In Stock
        </button>
      ) : (
        <button onClick={toggleInStock}>Out of Stock</button>
      )}
      <button
        className={isShowEdit ? "secondary" : ""}
        onClick={() => setIsShowEdit(!isShowEdit)}
      >
        {isShowEdit ? "Close" : "Edit"}
      </button>
      {/* added new classes to index.css to style these buttons */}
      <button
        onClick={deletePlant}
        className="danger"
      >
        X
      </button>
      {/* we are able to hide the new price form with conditional rendering based on showEdit boolean in state */}
      {isShowEdit && (
        <EditPlantForm
          id={id}
          price={price}
          onUpdatePlant={onUpdatePlant}
        />
      )}
    </li>
  );
}

export default PlantCard;
