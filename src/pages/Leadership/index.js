import React from "react";
import CoverPageLeadership from "./coverPageLeadership";
import OurMission from "./ourMission";
import OurCoreValues from "./ourCoreValues";
import MeetTeam from "../Home/meetTeam";
import MeetAdvisors from "./meetAdvisors";

function LeadershipPage() {
  return (
    <div className="portfolioPatent">
      <CoverPageLeadership />
      <OurMission />
      <OurCoreValues />
      <MeetTeam />
      <MeetAdvisors />
    </div>
  );
}

export default LeadershipPage;
