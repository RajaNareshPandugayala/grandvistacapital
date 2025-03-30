// import React, { useState, useEffect, useMemo } from "react";
import React from "react";

// import { Link } from "react-router-dom";

function BuildYourPortfolio() {
  return (
    <div className="homePageBuildYourPortfolioPageParent">
      <div className="homePageBuildYourPortfolioPageBox">
        <div className="homePageBuildYourPortfolioPageDiv">
          <iframe
            width="530"
            height="300"
            src="https://www.youtube.com/embed/6yVCuzyzWSI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="homePageBuildYourPortfolioPageDiv">
          <span className="homePageBuildYourPortfolioPageHeader">
            Why Passive Investing with us Is a Great Way
          </span>
          <span className="homePageBuildYourPortfolioPageContent">
            We enable Passive Investors to create wealth by purchasing ownership
            of income producing real estate properties across multiple markets.
          </span>
          <div className="homePageBuildYourPortfolioPageButtonDiv">
            <span className="homePageBuildYourPortfolioPageButton">
              Build your portfolio with us
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuildYourPortfolio;
