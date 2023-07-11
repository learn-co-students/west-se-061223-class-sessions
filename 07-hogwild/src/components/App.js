import React, { useState } from "react";
import Header from "./Header";
import Filter from "./Filter";
import HogList from "./HogList";

import hogs from "../porkers_data";

function App() {
	const [hogList, setHogList] = useState(hogs)
	return (
		<div className="App">
			<Header />
			<Filter />
			<HogList hogs={hogList}/>
		</div>
	);
}

export default App;
