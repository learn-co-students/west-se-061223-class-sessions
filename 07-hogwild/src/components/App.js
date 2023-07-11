import React, { useState } from "react";
import Header from "./Header";
import Filter from "./Filter";
import HogList from "./HogList";

import hogs from "../porkers_data";

function App() {
	const [hogList, setHogList] = useState(hogs)
	const [isShowGreased, setIsShowGreased] = useState(false)
	const [sortBy, setSortBy] = useState("name")

	const hogsToDisplay = [...hogList]
		.filter(hog => isShowGreased ? hog.greased : true)
		.sort((hog1, hog2) => {
			if (sortBy === "name") {
				return hog1.name.localeCompare(hog2.name)
			} else {
				return hog1.weight - hog2.weight
			}
		})

	return (
		<div className="App">
			<Header />
			<Filter 
				isShowGreased={isShowGreased}
				onCheckGreased={setIsShowGreased}
				sortBy={sortBy}
				onChangeSortBy={setSortBy}
			/>
			<HogList hogs={hogsToDisplay}/>
		</div>
	);
}

export default App;
