// import React, { useState, useEffect, useMemo } from "react";
import React from "react";
import CIPics1 from "../../PicesForPages/OIP (1).jpeg";
import CIPics2 from "../../PicesForPages/OIP (2).jpeg";
import CIPics3 from "../../PicesForPages/OIP (3).jpeg";
import Screenshot1 from "../../PicesForPages/Screenshot.jpeg";
import Screenshot2 from "../../PicesForPages/Screenshot2.jpeg";
import Screenshot3 from "../../PicesForPages/Screenshot3.jpeg";
import Screenshot4 from "../../PicesForPages/Screenshot4.jpeg";
import Screenshot5 from "../../PicesForPages/Screenshot5.jpeg";
import Screenshot6 from "../../PicesForPages/Screenshot6.jpeg";
import Screenshot7 from "../../PicesForPages/Screenshot7.jpeg";
import Screenshot8 from "../../PicesForPages/Screenshot8.jpeg";
import Screenshot9 from "../../PicesForPages/Screenshot9.jpeg";
import HandHoldingUsd from "../../PicesForPages/handHoldingUsd.png";
import Retweet from "../../PicesForPages/retweet.png";
import USD from "../../PicesForPages/USD.png";
import CButton from "../../PicesForPages/closeButton.png";

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
  {
    imgSrc: Screenshot2,
    title: "CANDELA RETAIL DEVELOPMENT",
    location: "Triple Net Lifestyle Retail Construction",
    details: [
      {
        img: HandHoldingUsd,
        number: "21%",
        title: "Internal Rate of Return",
      },
      { img: Retweet, number: "19+%", title: "Annualize Return" },
      { img: USD, number: "7%", title: "Preferred Return" },
    ],
  },
  {
    imgSrc: Screenshot1,
    title: "COTTONWOOD APARTMENTS",
    location: "Lakewood, Colorado",
    details: [
      {
        img: HandHoldingUsd,
        number: "16-19%+",
        title: "Internal Rate of Return",
      },
      { img: Retweet, number: "1.95x", title: "Total Return over 5 yrs" },
      { img: USD, number: "7%", title: "Preferred Return" },
    ],
  },
  {
    imgSrc: Screenshot3,
    title: "CREEKSIDE AT CHATHAM",
    location: "25 Creekside Cir, Pittsboro, NC 27312",
    details: [
      {
        img: HandHoldingUsd,
        number: "17%-19%",
        title: "Internal Rate of Return",
      },
      { img: Retweet, number: "24%-25%", title: "Annualize Return" },
      { img: USD, number: "7%", title: "Preferred Return" },
    ],
  },
  {
    imgSrc: Screenshot5,
    title: "McCallum Communities",
    location: "Far North Dallas,Texas",
    details: [
      { img: HandHoldingUsd, number: "419", title: "Units" },
      { img: Retweet, number: "5.8%x", title: "Average CoC" },
      { img: USD, number: "23.9%", title: "Target IRR" },
    ],
  },
  {
    imgSrc: Screenshot6,
    title: "Macon , GA Portfolio",
    location: "Macon, Georgia (Atlanta MSA)",
    details: [
      { img: HandHoldingUsd, number: "174", title: "Units" },
      { img: Retweet, number: "8%", title: "Average CoC" },
      { img: USD, number: "17%", title: "Target IRR" },
    ],
  },
  {
    imgSrc: Screenshot7,
    title: "Water’s Edge Townhomes",
    location: "Fayetteville, NC ( Fayetteville MSA)",
    details: [
      { img: HandHoldingUsd, number: "30", title: "Units" },
      { img: Retweet, number: "8%", title: "Average CoC" },
      { img: USD, number: "18%", title: "Target IRR" },
    ],
  },
  {
    imgSrc: Screenshot8,
    title: "PASADENA-22",
    location: "Pasadena, Tx",
    details: [
      { img: HandHoldingUsd, number: "Units", title: "226 (+2 offices)" },
      { img: Retweet, number: "9.7%", title: "Cash on Cash Return" },
      { img: USD, number: "17.87%", title: "Target IRR" },
    ],
  },
  {
    imgSrc: Screenshot4,
    title: "Austin’s Gateway",
    location: "Georgetown , Tx",
    details: [
      { img: HandHoldingUsd, number: "20%", title: "Internal Rate of Return" },
      { img: Retweet, number: "1.45x", title: "Total Return over 2 Years" },
      { img: USD, number: "7%", title: "Preferred Return" },
    ],
  },
  {
    imgSrc: Screenshot9,
    title: "Villages at Fate",
    location: "Fate, Texas (Dallas MSA)",
    details: [
      {
        img: HandHoldingUsd,
        number: "Units",
        title: "Mixed Use (Multi + Retail)",
      },
      { img: CButton, number: "Closed", title: "June, 2022" },
      { img: CButton, number: "Closed", title: "June, 2022" },
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

function ClosedOfferingPortfolio() {
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
      </div>
    </div>
  );
}

export default ClosedOfferingPortfolio;
