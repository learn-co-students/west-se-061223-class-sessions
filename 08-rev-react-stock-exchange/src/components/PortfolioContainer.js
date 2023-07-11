import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, onRemoveStock }) {

  const stockCards = portfolio.map(stock => (
    <Stock 
      key={stock.id}
      stock={stock}
      handleClickFunction={onRemoveStock}
    />
  ))
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        stockCards
      }
    </div>
  );
}

export default PortfolioContainer;
