import React, { useState } from "react";

function EditPlantForm({ id, price, onUpdatePlant }) {
  const [inputPrice, setInputPrice] = useState(price); // called state inputPrice on purpose to avoid name collision with price in props

  const patchPrice = () => {
    // refactored fetch into it's own function; a larger scale app might abstract all fetch function into a separate file and comoponents would import as necessary
    const config = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: inputPrice }),
    };
    return fetch(`http://localhost:6001/plants/${id}`, config)
        .then((r) => r.json()
    );
  };

  function handleSubmit(e) {
    e.preventDefault();
    patchPrice().then(onUpdatePlant); // pessimistic rendering is easier to code in this situation
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        step="0.01"
        placeholder="New price"
        value={inputPrice}
        onChange={(e) => setInputPrice(parseFloat(e.target.value))} // the input value will be a string by default, so have to change it to a number with parseFloat
      />
      <button type="submit">Update Price</button>
    </form>
  );
}

export default EditPlantForm;
