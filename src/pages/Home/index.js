// import React, { useState, useEffect, useMemo } from "react";
import React from "react";
import CoverPage from "./coverPage";
import ListOfToDo from "./listOfToDo";
import BuildYourPortfolio from "./buildYourPortfolio";
import HowItWorks from "./howItWorks";
import Investing from "./investing";
import PassiveInvestor from "./passiveInvestor";
import CurrentInvestment from "./currentInvestment";
import ClosedOffering from "./closedOffering";
import MeetTeam from "./meetTeam";

// import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homePageParent">
      <CoverPage />
      <ListOfToDo />
      <BuildYourPortfolio />
      <HowItWorks />
      <Investing />
      <PassiveInvestor />
      <CurrentInvestment />
      <ClosedOffering />
      <MeetTeam />
    </div>
  );
}

export default Home;
