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
          <Link to="/investment-portfolio" className="headerMenuUILink">
            <li>Invest</li>
          </Link>
          <Link to="/investment-portfolio" className="headerMenuUILink">
            <li>Portfolio</li>
          </Link>
          <Link to="/leadership" className="headerMenuUILink">
            <li>Leadership</li>
          </Link>
          <Link to="/contact-us" className="headerMenuUILink">
            <li>Contact Us</li>
          </Link>
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
