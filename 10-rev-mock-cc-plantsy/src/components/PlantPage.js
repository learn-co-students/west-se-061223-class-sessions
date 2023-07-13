import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then(setPlants);
  }, []);

  function addPlant(newPlant) {
    // I'll often console log the parameter of a callback function to make sure it gets passed down all the way to
    // the component with the triggering event, and that the caller is sending the right data as an argument
    // console.log("🚀 ~ file: PlantPage.js:18 ~ addPlant ~ newPlant", newPlant)

    // use the spread operator in a new array whenever you want to add a new object to an existing array in state
    setPlants((currPlants) => [...currPlants, newPlant]);
  }

  function updatePlants(updatePlant) {
    // const updatedPlants = plantsArr.map(plant => {
    //   if (plant === updatedPlant) return updatedPlant;
    //   return plant;
    // })
    // .map is the way to update one object in an array in state -> to render a change to one component out of a list
    setPlants((plants) =>
      plants.map((plant) => (plant.id === updatePlant.id ? updatePlant : plant))
    );
  }

  const removePlant = (id) => {
    // .filter is the way to delete an object from a state array -> to remove a component in a list from the DOM

    setPlants(plants.filter((plant) => plant.id !== id));
  };

  // .filter is also often used in search functionality together with .includes
  const plantsToDisplay = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  /* USE LOGICAL-OR || OPERATOR IF YOU WANT YOUR SEARCH INPUT TO APPLY TO MORE THAN ONE PROPERTY OF THE OBJECTS YOU'RE FILTERING */
  // const filteredPlants = plantsArr.filter(plant => plant.name.toLowerCase().includes(searchString.toLowerCase()) || plant.price.toString().includes(searchString))

  return (
    <main>
      <NewPlantForm onAddPlant={addPlant} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList
        plants={plantsToDisplay}
        onUpdatePlant={updatePlants}
        onDeletePlant={removePlant}
      />
    </main>
  );
}

export default PlantPage;
