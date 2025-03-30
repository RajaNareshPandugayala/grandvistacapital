// import React, { useState, useEffect, useMemo } from "react";
import React from "react";
import Ebook from "../../PicesForPages/Ebook.webp";

// import { Link } from "react-router-dom";

function PassiveInvestor() {
  return (
    <div className="homePagePassiveInvestorPageParent">
      <div className="homePagePassiveInvestorPageBox">
        <div className="homePagePassiveInvestorPageDiv">
          <img src={Ebook} alt="EbookImage" />
        </div>

        <div className="homePagePassiveInvestorPageDiv">
          <span className="homePagePassiveInvestorPageHeader">
            CHECKLIST FOR THE PASSIVE INVESTOR
          </span>
          <span className="homePagePassiveInvestorPageSubHeader">
            KEY Questions to ASK any Sponsor on a Multifamily Syndication
          </span>
          <span className="homePagePassiveInvestorPageContent">
            Look at our checklist with some great questions to ask any sponsor
            or syndicator when investing passively in an apartment or
            multifamily syndication. So download it to have some great starting
            questions…
          </span>
          <div className="homePagePassiveInvestorPageButtonDiv">
            <span className="homePagePassiveInvestorPageButton">Download</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PassiveInvestor;
