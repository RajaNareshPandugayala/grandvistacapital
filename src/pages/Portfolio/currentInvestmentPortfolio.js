// import React, { useState, useEffect, useMemo } from "react";
import React from "react";
import CIPics from "../../PicesForPages/HorizonNew.png";
import CIPlaceholder from "../../PicesForPages/placeholder.png";
import HandHoldingUsd from "../../PicesForPages/handHoldingUsd.png";
import Retweet from "../../PicesForPages/retweet.png";
import USD from "../../PicesForPages/USD.png";

// import { Link } from "react-router-dom";

const investmentData = [
  {
    imgSrc: CIPics,
    currentOffering: "CURRENT OFFERING",
    title: "HORIZON APARTMENTS",
    location: "204-Unit Apartment Community | San Antonio, TX",
    investButton: "INVEST NOW",
    details: [
      { img: HandHoldingUsd, number: "18%", title: "Projected IRR" },
      { img: Retweet, number: "22-23%", title: "Annualized Return" },
      { img: USD, number: "7%", title: "Preferred Return" },
    ],
  },
  {
    imgSrc: CIPlaceholder,
    currentOffering: "COMING SOON",
    title: "COMING SOON",
    location: "New opportunities are just around the corner",
    investButton: "INVEST SOON",
    details: [
      { img: HandHoldingUsd, number: "%", title: "Projected IRR" },
      { img: Retweet, number: "%", title: "Annualized Return" },
      { img: USD, number: "%", title: "Preferred Return" },
    ],
  },
];

const InvestmentCard = ({
  imgSrc,
  currentOffering,
  title,
  location,
  investButton,
  details,
}) => (
  <div className="homePageCurrentInvestmentPageBoxDiv">
    <div className="homePageCurrentInvestmentPageImageDiv">
      <img src={imgSrc} alt="Investment" />
      <span className="homePageCurrentInvestmentPageImageDivSticker">
        {currentOffering}
      </span>
    </div>
    <span className="homePageCurrentInvestmentPageSubHeader">{title}</span>
    <span className="homePageCurrentInvestmentPageContent">{location}</span>
    <div className="homePageCurrentInvestmentPageButtonDiv">
      <span className="homePageCurrentInvestmentPageButton">
        {investButton}
      </span>
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

function CurrentInvestmentPortfolio() {
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

export default CurrentInvestmentPortfolio;
