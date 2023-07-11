import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio }) {

  const stockCards = portfolio.map(stock => (
    <Stock 
      key={stock.id}
      stock={stock}
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
