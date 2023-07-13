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
    setPlants(currPlants => [...currPlants, newPlant]);
  }

  function updatePlants(updatePlant){
    console.log("🚀 ~ file: PlantPage.js:21 ~ updatePlants ~ updatePlant:", updatePlant)
    setPlants(plants => plants.map(plant => plant.id === updatePlant.id ? updatePlant: plant))
  }

  const plantsToDisplay = plants.filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <main>
      <NewPlantForm onAddPlant={addPlant} />
      <Search 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <PlantList 
        plants={plantsToDisplay}
        onUpdatePlant={updatePlants}
      />
    </main>
  );
}

export default PlantPage;
