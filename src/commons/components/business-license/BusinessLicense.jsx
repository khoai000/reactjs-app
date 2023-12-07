import React, { useEffect } from "react";
import "./business_license.css";
import gpkd1 from "../../images/gpkd1.png";
import gpkd2 from "../../images/gpkd2.png";
import AOS from "aos";
import "aos/dist/aos.css";

const BusinessLicense = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="license-wrap">
      <div className="mt-8 !text-slate-800">
        <h1 className="">GIẤY PHÉP KINH DOANH</h1>
      </div>
      <div className="license-content flex flex-row wrapper justify-evenly">
        <div
          className="license-left"
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-duration="2000"
        >
          <img src={gpkd1} alt="g1" />
        </div>
        <div
          className="license-right"
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-duration="2000"
        >
          <img src={gpkd2} alt="g2" />
        </div>
      </div>
    </div>
  );
};

export default BusinessLicense;
