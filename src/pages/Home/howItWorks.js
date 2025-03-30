// import React, { useState, useEffect, useMemo } from "react";
import React from "react";
import Join from "../../PicesForPages/join.png";
import Learn from "../../PicesForPages/onlineLearning.png";
import Guidance from "../../PicesForPages/supportServices.png";
import Process from "../../PicesForPages/steps.png";
import Invest from "../../PicesForPages/invesment.png";

// import { Link } from "react-router-dom";

function HowItWorks() {
  return (
    <div className="homePageHowItWorksPageParent">
      <div className="homePageHowItWorksPageBox">
        <div className="homePageHowItWorksPageTopDiv">
          <span className="homePageHowItWorksPageHeader">HOW IT WORKS?</span>
          <span className="homePageHowItWorksPageContent">
            Massive Capital uses strict investment criteria to filter and source
            ideal properties in the multifamily market. These properties will be
            presented with information allowing you to carefully evaluate the
            opportunity in line with your investment parameters and goals.
          </span>
        </div>
        <div className="homePageHowItWorksPageButtonDiv">
          <div className="homePageHowItWorksPageButtonDivBox">
            <img src={Join} alt="JoinImage" />
            <span className="homePageHowItWorksPageButtonDivBoxTitle">
              Join
            </span>
            <span className="homePageHowItWorksPageButtonDivBoxContent">
              Join our exclusive investor list to become part of our investor
              community
            </span>
          </div>
          <div className="homePageHowItWorksPageButtonDivBox">
            <img src={Learn} alt="LearnImage" />
            <span className="homePageHowItWorksPageButtonDivBoxTitle">
              Learn
            </span>
            <span className="homePageHowItWorksPageButtonDivBoxContent">
              Receive privileged information on all our latest investment
              opportunities
            </span>
          </div>
          <div className="homePageHowItWorksPageButtonDivBox">
            <img src={Guidance} alt="GuidanceImage" />
            <span className="homePageHowItWorksPageButtonDivBoxTitle">
              GUIDANCE
            </span>
            <span className="homePageHowItWorksPageButtonDivBoxContent">
              Schedule a call with one of our investment team to discuss your
              objectives and answer all of your questions
            </span>
          </div>
          <div className="homePageHowItWorksPageButtonDivBox">
            <img src={Process} alt="ProcessImage" />
            <span className="homePageHowItWorksPageButtonDivBoxTitle">
              PROCESS
            </span>
            <span className="homePageHowItWorksPageButtonDivBoxContent">
              Complete the paperwork and become a passive investor in one of our
              multifamily properties
            </span>
          </div>
          <div className="homePageHowItWorksPageButtonDivBox">
            <img src={Invest} alt="InvestImage" />
            <span className="homePageHowItWorksPageButtonDivBoxTitle">
              INVEST
            </span>
            <span className="homePageHowItWorksPageButtonDivBoxContent">
              Relax and enjoy receiving regular reports and profit distributions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
