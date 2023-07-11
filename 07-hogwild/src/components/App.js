import React from "react";
import Header from "./Header";
import Filter from "./Filter";
import HogList from "./HogList";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Header />
			<Filter />
			<HogList />
		</div>
	);
}

export default App;
