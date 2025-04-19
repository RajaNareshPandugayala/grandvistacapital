import React from "react";
import AvatarImage from "../../PicesForPages/blank.jpg";

const teamMembers = [
  { img: AvatarImage, name: "____ ______", designation: "_____ ____ ___" },
];

function MeetAdvisors() {
  return (
    <div className="homePageMeetTeamPageParent">
      <div className="homePageMeetTeamPageBox">
        <span className="homePageMeetTeamPageHeader">OUR ADVISORS</span>
        <div className="homePageMeetTeamPageListBox">
          {teamMembers.map((member, index) => (
            <span
              key={index}
              className="homePageMeetTeamPageListPicNameDesignation"
            >
              <img src={member.img} alt={member.name} />
              <span className="homePageMeetTeamPageListNameDesignationBox">
                <span className="homePageMeetTeamPageListName">
                  {member.name}
                </span>
                <span className="homePageMeetTeamPageListDesignation">
                  {member.designation}
                </span>
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MeetAdvisors;
