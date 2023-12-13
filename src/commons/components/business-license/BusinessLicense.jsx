import React, { useEffect } from "react";
import "./business_license.css";
import gpkd1 from "../../images/gpkd1.png";
import gpkd2 from "../../images/gpkd2.png";
import AOS from "aos";
import "aos/dist/aos.css";

const BusinessLicense = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="license-wrap" id="license">
      <div className="license-title">GIẤY PHÉP KINH DOANH</div>
      <div className="license-content flex flex-row wrapper justify-evenly">
        <div
          className="license-left"
          data-aos="fade-right"
          data-aos-offset="200"
        >
          <div className="license-logo"></div>
        </div>
        <div
          className="license-right"
          data-aos="fade-left"
          data-aos-offset="200"
        >
          <div className="license-logo"></div>
        </div>
      </div>
    </div>
  );
};

export default BusinessLicense;
