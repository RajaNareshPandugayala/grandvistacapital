import React from "react";
import CoverPagePortfolio from "./coverPagePortfolio";
import ListOfToDo from "../Home/listOfToDo";
import CurrentInvestmentPortfolio from "./currentInvestmentPortfolio";
import ClosedOfferingPortfolio from "./closedOfferingPortfolio";

function PortfolioPage() {
  return (
    <div className="portfolioPatent">
      <CoverPagePortfolio />
      <ListOfToDo />
      <CurrentInvestmentPortfolio />
      <ClosedOfferingPortfolio />
    </div>
  );
}

export default PortfolioPage;
