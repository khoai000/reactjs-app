import React from "react";
import "./banner.css";
import logo from "../../assets/Logo_BCN.png";

const Banner = () => {
  return (
    <div className="banner-wrap">
      <div className="banner-top">
        <img src={logo} alt="" className="banner-logo" />
        <p className="banner-text">
          CÔNG TY CÔ PHẦN CUNG ỨNG NHÂN LỰC BCN QUỐC TẾ
        </p>
      </div>
      <div className="background_cover"></div>
    </div>
  );
};

export default Banner;
