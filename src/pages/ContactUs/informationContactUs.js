import React from "react";

function InformationContactUs() {
  return (
    <div className="informationContactPageParent">
      <div className="informationContactPageBox">
        <div className="informationContactPageBoxDiv">
          <span className="informationContactPageHeader">
            Contact Information
          </span>
          <div className="informationContactPageMailLocationDiv">
            <span className="informationContactPageMail">
              <i class="ri-mail-fill"></i>
              <span>info@massivecapital.com</span>
            </span>
            <span className="informationContactPageLocation">
              <i class="ri-map-pin-2-fill"></i>
              <span>Katy, Texas, 77494</span>
            </span>
          </div>
          <iframe
            title="Katy Texas Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14231864.32468115!2d-95.469335!3d29.441178999999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864123ed95a445ed%3A0x87ba71c2b758c04d!2sKaty%2C%20TX%2077494!5e0!3m2!1sen!2sus!4v1745065351323!5m2!1sen!2sus"
            width="500"
            height="450"
            style={{ border: 0, borderRadius: 5 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="informationContactPageBoxDiv">
          <span className="informationContactPageHeader">
            How can we help you?
          </span>
        </div>
      </div>
    </div>
  );
}

export default InformationContactUs;
