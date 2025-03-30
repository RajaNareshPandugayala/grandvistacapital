// import React, { useState, useEffect, useMemo } from "react";
import React from "react";

// import { Link } from "react-router-dom";

function ListOfToDo() {
  return (
    <div className="homePageListOfToDoPageParent">
      <div className="homePageListOfToDoPageBox">
        <div className="homePageListOfToDoPageDiv">
          <span className="homePageListOfToDoPageSpanNumber">15</span>
          <span className="homePageListOfToDoPageSpanContent">Projects</span>
        </div>
        <hr className="homePageListOfToDoPageDivHR" />
        <div className="homePageListOfToDoPageDiv">
          <span className="homePageListOfToDoPageSpanNumber">1,346</span>
          <span className="homePageListOfToDoPageSpanContent">Units</span>
        </div>
        <hr className="homePageListOfToDoPageDivHR" />
        <div className="homePageListOfToDoPageDiv">
          <span className="homePageListOfToDoPageSpanNumber">$44M</span>
          <span className="homePageListOfToDoPageSpanContent">
            Equity Deployed
          </span>
        </div>
        <hr className="homePageListOfToDoPageDivHR" />
        <div className="homePageListOfToDoPageDiv">
          <span className="homePageListOfToDoPageSpanNumber">$203M</span>
          <span className="homePageListOfToDoPageSpanContent">
            Assets Under Management
          </span>
        </div>
      </div>
    </div>
  );
}

export default ListOfToDo;
