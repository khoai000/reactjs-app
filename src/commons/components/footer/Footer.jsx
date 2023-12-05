import React from "react";
import "./footer.css";
import logo from "../../assets/Logo_BCN.png";
const Footer = () => {
  return (
    <>
      <footer className="new_footer_area bg_color">
        <div className="new_footer_top">
          {/* <div className="container-info">
            <div>
              <img src={logo} alt="" />
            </div>
          </div> */}
          <div className="footer_bg ">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>
        {/* <div className="footer_bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-7">
              <p className="mb-0 f_400">
                © cakecounter Inc.. 2019 All rights reserved.
              </p>
            </div>
            <div className="col-lg-6 col-sm-5 text-right">
              <p>
                Made with <i className="icon_heart"></i> in{" "}
                <a href="http://cakecounter.com" target="_blank">
                  CakeCounter
                </a>
              </p>
            </div>
          </div>
        </div>
      </div> */}
      </footer>
    </>
  );
};

export default Footer;
