import React, { useState } from "react";

const initialFormState = {
  name: "",
  image: "",
  price: "",
};

function NewPlantForm({ onAddPlant }) {
  const [formData, setFormData] = useState(initialFormState);

  const { name, image, price } = formData;

  function handleChangeInput(event) {
    const { name, value } = event.target;
    setFormData((formData) => {
      return { ...formData, [name]: value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        // HTML inputs alway return their values as strings, so if we want to keep price a number
        // we need to convert (coerce) it into a float (number with decimal places)
        price: parseFloat(formData.price),
      }),
    };
    fetch("http://localhost:6001/plants", config)
      .then((r) => r.json())
      .then(onAddPlant); // call the callback function, sending the newPlant object up to PlantPage
    // pessimitic rendering
    setFormData(initialFormState);
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChangeInput}
          value={name}
          type="text"
          name="name"
          placeholder="Plant name"
        />
        <input
          onChange={handleChangeInput}
          value={image}
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <input
          onChange={handleChangeInput}
          value={price}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
