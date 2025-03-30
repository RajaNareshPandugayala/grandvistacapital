// import React, { useState, useEffect, useMemo } from "react";
import React from "react";
import CIPics1 from "../../PicesForPages/OIP (1).jpeg";
import CIPics2 from "../../PicesForPages/OIP (2).jpeg";
import CIPics3 from "../../PicesForPages/OIP (3).jpeg";
import HandHoldingUsd from "../../PicesForPages/handHoldingUsd.png";
import Retweet from "../../PicesForPages/retweet.png";
import USD from "../../PicesForPages/USD.png";

// import { Link } from "react-router-dom";

const investmentData = [
  {
    imgSrc: CIPics1,
    title: "XSPACE",
    location: "Houston, TX",
    details: [
      {
        img: HandHoldingUsd,
        number: "22.8%",
        title: "Internal Rate of Return",
      },
      { img: Retweet, number: "1.51x", title: "Total Return over 2-2.5 yrs" },
      { img: USD, number: "7%", title: "Preferred Return" },
    ],
  },
  {
    imgSrc: CIPics2,
    title: "HARRIS RIDGE",
    location: "1111 E Howard Lane, Austin, TX 78753",
    details: [
      { img: HandHoldingUsd, number: "20%+", title: "Internal Rate of Return" },
      { img: Retweet, number: "1.72x", title: "Total Return over 3 Years" },
      { img: USD, number: "7%", title: "Preferred Return" },
    ],
  },
  {
    imgSrc: CIPics3,
    title: "Amberwood Apartment Homes",
    location: "Fort Worth, Tx",
    details: [
      {
        img: HandHoldingUsd,
        number: "17.1%",
        title: "Internal Rate of Return",
      },
      { img: Retweet, number: "1.95x", title: "Total Return over Years" },
      { img: USD, number: "7%", title: "Preferred Return" },
    ],
  },
];

const InvestmentCard = ({ imgSrc, title, location, details }) => (
  <div className="homePageCurrentInvestmentPageBoxDiv">
    <div className="homePageCurrentInvestmentPageImageDiv">
      <img src={imgSrc} alt="Investment" />
      <span className="homePageCurrentInvestmentPageImageDivSticker homePageClosedOfferingPageImageDivSticker">
        CLOSED OFFERING
      </span>
    </div>
    <span className="homePageCurrentInvestmentPageSubHeader">{title}</span>
    <span className="homePageCurrentInvestmentPageContent">{location}</span>
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

function ClosedOffering() {
  return (
    <div className="homePageCurrentInvestmentPageParent">
      <div className="homePageCurrentInvestmentPageBox">
        <span className="homePageCurrentInvestmentPageHeader">
          CLOSED OFFERING
        </span>
        <div className="homePageCurrentInvestmentPageBoxDivParent">
          {investmentData.map((investment, index) => (
            <InvestmentCard key={index} {...investment} />
          ))}
        </div>
        <div className="homePageCurrentInvestmentPageButtonViewMoreDiv">
          <span className="homePageCurrentInvestmentPageButtonViewMore">
            VIEW MORE
          </span>
        </div>
      </div>
    </div>
  );
}

export default ClosedOffering;
