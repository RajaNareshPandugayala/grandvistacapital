// import React, { useState, useEffect, useMemo } from "react";
import React from "react";

// import { Link } from "react-router-dom";

function CoverPage() {
  return (
    <div className="homePageCoverPageParent">
      <div className="homePageCoverPageBox">
        <span className="homePageCoverPageHeading">
          Invest In Real Estate With Confidence
        </span>
        <span className="homePageCoverPageContent">
          We simplify real estate investing for busy professionals to create
          wealth by acquiring ownership of income-producing properties.
        </span>
        <span className="homePageCoverPageButtons">
          <div className="homePageCoverPageLeftRightButtonDiv">
            <span className="homePageCoverPageLeftButton">
              Invest in Multifamily
            </span>
          </div>
          <div className="homePageCoverPageLeftRightButtonDiv">
            <span className="homePageCoverPageRightButton">
              Book a Call with Us
            </span>
          </div>
        </span>
      </div>
    </div>
  );
}

export default CoverPage;
