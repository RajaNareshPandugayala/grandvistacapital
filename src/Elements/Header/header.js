// import React, { useState, useRef, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../PicesForPages/LogoHeaderBGRemoved.png";
// import menuButton from "../../PicesForPages/menu.png";

function Header() {
  return (
    <div className="headerParent">
      <div className="headerBox">
        <Link to="/" className="headerLogoDiv">
          <img src={Logo} alt="Logo" className="headerLogo" />
        </Link>
        <ui className="headerMenuUI">
          <li>Invest</li>
          <li>Portfolio</li>
          <li>Learning</li>
          <li>Center</li>
          <li>About Us</li>
          <li>Events</li>
          <li>She</li>
          <li>Submit Deal</li>
          <li>Investor Login</li>
        </ui>
      </div>
    </div>
  );
}

export default Header;
