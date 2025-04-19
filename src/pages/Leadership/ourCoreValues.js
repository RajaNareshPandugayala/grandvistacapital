// import React, { useState, useEffect, useMemo } from "react";
import React from "react";
import Lock from "../../PicesForPages/lock.png";
import leadershipIcon from "../../PicesForPages/leadershipIcon.png";
import Purpose from "../../PicesForPages/purpose.jpg";
import LightIcon from "../../PicesForPages/lightIcon.png";
import Graduation from "../../PicesForPages/graduation.png";

// import { Link } from "react-router-dom";

function OurCoreValues() {
  return (
    <div className="homePageHowItWorksPageParent">
      <div className="homePageHowItWorksPageBox">
        <div className="homePageHowItWorksPageTopDiv">
          <span className="homePageHowItWorksPageHeader">OUR CORE VALUES</span>
        </div>
        <div className="homePageHowItWorksPageButtonDiv">
          <div className="homePageHowItWorksPageButtonDivBox">
            <img src={Lock} alt="JoinImage" />
            <span className="homePageHowItWorksPageButtonDivBoxTitle">
              INTEGRITY
            </span>
            <span className="homePageHowItWorksPageButtonDivBoxContent">
              Serve others first
            </span>
          </div>
          <div className="homePageHowItWorksPageButtonDivBox">
            <img src={leadershipIcon} alt="LearnImage" />
            <span className="homePageHowItWorksPageButtonDivBoxTitle">
              SERVANT LEADERSHIP
            </span>
            <span className="homePageHowItWorksPageButtonDivBoxContent">
              Living to serve others and give back
            </span>
          </div>
          <div className="homePageHowItWorksPageButtonDivBox">
            <img src={Purpose} alt="GuidanceImage" />
            <span className="homePageHowItWorksPageButtonDivBoxTitle">
              PURPOSE
            </span>
            <span className="homePageHowItWorksPageButtonDivBoxContent">
              Become a better version of yourself every day
            </span>
          </div>
          <div className="homePageHowItWorksPageButtonDivBox">
            <img src={LightIcon} alt="ProcessImage" />
            <span className="homePageHowItWorksPageButtonDivBoxTitle">
              CREATIVITY
            </span>
            <span className="homePageHowItWorksPageButtonDivBoxContent">
              Thinking outside of the box
            </span>
          </div>
          <div className="homePageHowItWorksPageButtonDivBox">
            <img src={Graduation} alt="InvestImage" />
            <span className="homePageHowItWorksPageButtonDivBoxTitle">
              EXPERIENCE
            </span>
            <span className="homePageHowItWorksPageButtonDivBoxContent">
              Delivering the ultimate client journey
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCoreValues;
