// import React, { useState, useEffect, useMemo } from "react";
import React from "react";
import CIPics from "../../PicesForPages/OIP.jpeg";
import HandHoldingUsd from "../../PicesForPages/handHoldingUsd.png";
import Retweet from "../../PicesForPages/retweet.png";
import USD from "../../PicesForPages/USD.png";

// import { Link } from "react-router-dom";

const investmentData = [
  {
    imgSrc: CIPics,
    title: "HORIZON APARTMENTS",
    location: "204-Unit Apartment Community | San Antonio, TX",
    details: [
      { img: HandHoldingUsd, number: "18%", title: "Projected IRR" },
      { img: Retweet, number: "22-23%", title: "Annualized Return" },
      { img: USD, number: "7%", title: "Preferred Return" },
    ],
  },
];

const InvestmentCard = ({ imgSrc, title, location, details }) => (
  <div className="homePageCurrentInvestmentPageBoxDiv">
    <div className="homePageCurrentInvestmentPageImageDiv">
      <img src={imgSrc} alt="Investment" />
      <span className="homePageCurrentInvestmentPageImageDivSticker">
        CURRENT OFFERING
      </span>
    </div>
    <span className="homePageCurrentInvestmentPageSubHeader">{title}</span>
    <span className="homePageCurrentInvestmentPageContent">{location}</span>
    <div className="homePageCurrentInvestmentPageButtonDiv">
      <span className="homePageCurrentInvestmentPageButton">INVEST NOW</span>
    </div>
    <div className="homePageCurrentInvestmentPageDetailsParent">
      {details.map((detail, index) => (
        <span
          key={index}
          className={`homePageCurrentInvestmentPageDetailsBox ${
            index === 0
              ? "homePageCurrentInvestmentPageDetailsBoxLeft"
              : index === 1
              ? "homePageCurrentInvestmentPageDetailsBoxMiddle"
              : "homePageCurrentInvestmentPageDetailsBoxRight"
          }`}
        >
          <span className="homePageCurrentInvestmentPageDetailsBoxImageSpan">
            <img src={detail.img} alt="Icon" />
          </span>
          <span className="homePageCurrentInvestmentPageDetailsNumber">
            {detail.number}
          </span>
          <span className="homePageCurrentInvestmentPageDetailsTitle">
            {detail.title}
          </span>
        </span>
      ))}
    </div>
  </div>
);

function CurrentInvestment() {
  return (
    <div className="homePageCurrentInvestmentPageParent">
      <div className="homePageCurrentInvestmentPageBox">
        <span className="homePageCurrentInvestmentPageHeader">
          CURRENT INVESTMENT OPPORTUNITIES
        </span>
        <div className="homePageCurrentInvestmentPageBoxDivParent">
          {investmentData.map((investment, index) => (
            <InvestmentCard key={index} {...investment} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CurrentInvestment;
