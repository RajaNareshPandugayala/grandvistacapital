// import React, { useState, useEffect, useMemo } from "react";
import React from "react";
import Cash from "../../PicesForPages/cash.png";
import Balance from "../../PicesForPages/Balance.png";
import Warning from "../../PicesForPages/warning.png";
import MutualFund from "../../PicesForPages/mutualFund.png";
import ThumbsUp from "../../PicesForPages/thumbsUp.png";
import Percentage from "../../PicesForPages/Percentage.png";

// import { Link } from "react-router-dom";

function Investing() {
  return (
    <div className="homePageInvestingPageParent">
      <div className="homePageInvestingPageBox">
        <span className="homePageInvestingPageHeader">
          WHY PASSIVE MULTIFAMILY INVESTING
        </span>
        <div className="homePageInvestingPageDiv">
          <div className="homePageInvestingPageDivBox">
            <img src={Cash} alt="CashImage" />
            <span className="homePageInvestingPageRightSpan">
              <span className="homePageInvestingPageDivBoxTitle">
                PREDICTABLE CASH FLOW
              </span>
              <span className="homePageInvestingPageDivBoxContent">
                Multifamily investing is that your cash collected will
                accumulate faster. More units to be rented means more money.
              </span>
            </span>
          </div>
          <div className="homePageInvestingPageDivBox">
            <img src={Balance} alt="BalanceImage" />
            <span className="homePageInvestingPageRightSpan">
              <span className="homePageInvestingPageDivBoxTitle">LEVERAGE</span>
              <span className="homePageInvestingPageDivBoxContent">
                These are extremely valuable assets in real estate & can have a
                positive impact on investment returns.
              </span>
            </span>
          </div>
          <div className="homePageInvestingPageDivBox">
            <img src={Warning} alt="WarningImage" />
            <span className="homePageInvestingPageRightSpan">
              <span className="homePageInvestingPageDivBoxTitle">
                LESSER RISK
              </span>
              <span className="homePageInvestingPageDivBoxContent">
                Multifamily properties generally reduce your risk of total
                vacancy, unlike single-family homes.
              </span>
            </span>
          </div>
          <div className="homePageInvestingPageDivBox">
            <img src={MutualFund} alt="MutualFundImage" />
            <span className="homePageInvestingPageRightSpan">
              <span className="homePageInvestingPageDivBoxTitle">
                PASSIVE INCOME
              </span>
              <span className="homePageInvestingPageDivBoxContent">
                This provides investors multifamily ownership without the hassle
                of managing the property.
              </span>
            </span>
          </div>
          <div className="homePageInvestingPageDivBox">
            <img src={ThumbsUp} alt="ThumbsUpImage" />
            <span className="homePageInvestingPageRightSpan">
              <span className="homePageInvestingPageDivBoxTitle">
                LOWER BARRIERS TO ENTRY
              </span>
              <span className="homePageInvestingPageDivBoxContent">
                The barriers to entry for passive investing are much lower than
                an active approach.
              </span>
            </span>
          </div>
          <div className="homePageInvestingPageDivBox">
            <img src={Percentage} alt="PercentageImage" />
            <span className="homePageInvestingPageRightSpan">
              <span className="homePageInvestingPageDivBoxTitle">
                TAX EFFICIENCY
              </span>
              <span className="homePageInvestingPageDivBoxContent">
                Investments with multifamily properties mean you can take
                advantage of significant tax benefits.
              </span>
            </span>
          </div>
        </div>
        <div className="homePageInvestingPageButtonDiv">
          <span className="homePageInvestingPageButton">
            FIND YOUR FINANCIAL FREEDOM
          </span>
        </div>
      </div>
    </div>
  );
}

export default Investing;
