import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [sortBy, setSortBy] = useState("Alphabetically")
  const [filterBy, setFilterBy] = useState("Tech")

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(res => res.json())
      .then(setStocks)
  }, [])

  function addToPortfolio(stockToAdd){
    // todo: prevent duplicates
    if (!portfolio.some(stock => stock.id === stockToAdd.id)){
      setPortfolio(portfolio => [...portfolio, stockToAdd])
    }
  }

  function removeFromPortfolio(deletedStock){
    setPortfolio(portfolio => portfolio.filter(stock => stock.id !== deletedStock.id))
  }

const stocksToDisplay = [...stocks]
  .sort((stockA, stockB) => {
    if (sortBy === "Alphabetically"){
      return stockA.ticker.localeCompare(stockB.ticker)
    } else {
      return stockA.price - stockB.price
    }
  })
  .filter(stock => stock.type.includes(filterBy))

  return (
    <div>
      <SearchBar 
        sortBy={sortBy}
        onSortChange={setSortBy}
        filterBy={filterBy}
        onFilterChange={setFilterBy}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer  
            onAddPortfolio={addToPortfolio}
            stocks={stocksToDisplay}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolio={portfolio}
            onRemoveStock={removeFromPortfolio}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
