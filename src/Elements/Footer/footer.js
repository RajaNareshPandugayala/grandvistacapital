import React from "react";
// import housingIcon from "../../PicesForPages/equal-housing-opportunity-logo-100-w.png";
// import whatappIcon from "../../PicesForPages/WhatsappIcon.png";
import Logo from "../../PicesForPages/LogoBGRemoved.png";
// import { Link } from "react-router-dom";

function Footer() {
  // Scroll to the top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };
  return (
    <div className="footerParent">
      <div className="footerBox">
        <div className="footerBoxTopBox">
          <div className="footerBoxTopSocailMediaBox">
            <i class="ri-mail-fill"></i>
            <span className="footerBoxTopSocailMediaContent">
              <span className="footerBoxTopSocailMediaContentTitle">
                Email Us
              </span>
              <span className="footerBoxTopSocailMediaContentLink">
                investors@grandvista.capital
              </span>
            </span>
          </div>
          <hr className="footerBoxTopBoxHR" />
          <div className="footerBoxTopSocailMediaBox">
            <i class="ri-phone-fill"></i>
            <span className="footerBoxTopSocailMediaContent">
              <span className="footerBoxTopSocailMediaContentTitle">
                Call Us
              </span>
              <span className="footerBoxTopSocailMediaContentLink">
                Schedule a Call
              </span>
            </span>
          </div>
          <hr className="footerBoxTopBoxHR" />
          <div className="footerBoxTopSocailMediaBox">
            <i class="ri-map-pin-2-fill"></i>
            <span className="footerBoxTopSocailMediaContent">
              <span className="footerBoxTopSocailMediaContentTitle">
                Find Us
              </span>
              <span className="footerBoxTopSocailMediaContentLink">
                Grand Vista Capital
              </span>
            </span>
          </div>
          <hr className="footerBoxTopBoxHR" />
          <div className="footerBoxTopSocailMediaBox footerBoxTopSocailMediaBox00">
            <span className="footerBoxTopSocailMediaBoxButton">
              INVEST NOW!
            </span>
          </div>
        </div>
        <div className="footerBoxBottomBox">
          <div className="footerBoxBottomBoxImageDiv">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="footerBoxBottomBoxContentLinkBox">
            <span className="footerBoxBottomBoxContent">
              Although investing in large commercial properties generally
              reduces your risk relative to investing in only single-unit
              properties, these should be viewed as risky and speculative
              investments, like any private investment in real estate. You could
              lose some or all of your investment.
            </span>
            <span className="footerBoxBottomBoxLinkBox">
              <span className="footerBoxBottomBoxLinkBoxdoteLinkSpanParent">
                <span className="footerBoxBottomBoxLinkBoxdoteLinkSpan">
                  <span className="footerBoxBottomBoxLinkBoxdote"></span>
                  <span className="footerBoxBottomBoxLinkBoxLink">
                    Leadership
                  </span>
                </span>
                <span className="footerBoxBottomBoxLinkBoxdoteLinkSpan">
                  <span className="footerBoxBottomBoxLinkBoxdote"></span>
                  <span className="footerBoxBottomBoxLinkBoxLink">Contact</span>
                </span>
              </span>
              <span className="footerBoxBottomBoxLinkBoxdoteLinkSpanParent">
                <span className="footerBoxBottomBoxLinkBoxdoteLinkSpan">
                  <span className="footerBoxBottomBoxLinkBoxdote"></span>
                  <span className="footerBoxBottomBoxLinkBoxLink">
                    Portfolio
                  </span>
                </span>
                <span className="footerBoxBottomBoxLinkBoxdoteLinkSpan">
                  <span className="footerBoxBottomBoxLinkBoxdote"></span>
                  <span className="footerBoxBottomBoxLinkBoxLink">She</span>
                </span>
                <span className="footerBoxBottomBoxLinkBoxdoteLinkSpan">
                  <span className="footerBoxBottomBoxLinkBoxdote"></span>
                  <span className="footerBoxBottomBoxLinkBoxLink">FAQ</span>
                </span>
              </span>
              <span className="footerBoxBottomBoxLinkBoxdoteLinkSpanParent">
                <span className="footerBoxBottomBoxLinkBoxdoteLinkSpan">
                  <span className="footerBoxBottomBoxLinkBoxdote"></span>
                  <span className="footerBoxBottomBoxLinkBoxLink">
                    Join Our Community
                  </span>
                </span>
                <span className="footerBoxBottomBoxLinkBoxdoteLinkSpan">
                  <span className="footerBoxBottomBoxLinkBoxdote"></span>
                  <span className="footerBoxBottomBoxLinkBoxLink">
                    Investor Portal
                  </span>
                </span>
                <span className="footerBoxBottomBoxLinkBoxdoteLinkSpan">
                  <span className="footerBoxBottomBoxLinkBoxdote"></span>
                  <span className="footerBoxBottomBoxLinkBoxLink">
                    Submit Your Deal
                  </span>
                </span>
                <span className="footerBoxBottomBoxLinkBoxdoteLinkSpan">
                  <span className="footerBoxBottomBoxLinkBoxdote"></span>
                  <span className="footerBoxBottomBoxLinkBoxLink">
                    Privacy Policy
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div className="footerBottom">
            <span className="footerBottomDown">
              Powered by{" "}
              <a
                href="https://shushanktech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="shushankTechLink"
              >
                ShushankTech{" "}
              </a>
              <span className="footerBottomDown02">
                This site is protected by{" "}
                <a
                  href="https://shushanktech.com/"
                  className="shushankTechLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ShushankTech
                </a>{" "}
                <b>Privacy Policy</b> and <b>Terms of Service</b> apply.
              </span>
            </span>
          </div>
          <span className="developerRNP">
            Front-end Developer: Raja Naresh Pandugayala
          </span>
        </div>

        <div className="goTop" onClick={scrollToTop}>
          <span>TOP</span>
        </div>
        <div className="WhatApp">
          <a
            href="https://wa.link/tn6193"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <img src={whatappIcon} alt="whatappIcon" className="whatappIcon" /> */}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
