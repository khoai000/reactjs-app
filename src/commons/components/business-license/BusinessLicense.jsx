import React from "react";
import "./business_license.css";
import gpkd1 from "../../images/gpkd1.png";
import gpkd2 from "../../images/gpkd2.png";

const BusinessLicense = () => {
  return (
    <div className="license-wrap">
      <div className="mt-3">
        <h1 className="">GIẤY PHÉP KINH DOANH</h1>
      </div>
      <div className="license-content flex flex-row wrapper justify-evenly">
        <div className="license-left">
          <img src={gpkd1} alt="g1" />
        </div>
        <div className="license-right">
          <img src={gpkd2} alt="g2" />
        </div>
      </div>
    </div>
  );
};

export default BusinessLicense;
