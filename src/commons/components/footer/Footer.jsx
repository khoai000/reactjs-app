import React from "react";
import "./footer.css";
import logo from "../../assets/Logo_BCN.png";
import fb from "../../assets/facebook.png";
import tt from "../../assets/tik-tok.png";

const Footer = () => {
  return (
    <>
      <footer className="new_footer_area" id="footer">
        <div className="new_footer_top">
          <div className="new-footer_content">
            <div className="content-child">
              <div className="flex flex-row items-center">
                <img src={logo} alt="logo" className="footer-logo" />
                <p className="company-name">BCN HR ,.JSC</p>
              </div>
              <ul className="style-ul">
                <li>Giới thiệu chung</li>
                <li>Đơn hàng</li>
                <li>Về công ty</li>
                <li>Kết quả hoạt động</li>
                <li>Hình ảnh công ty</li>
                <li>Liên hệ</li>
              </ul>
            </div>
            <div className="content-child">
              <h1 className="content-child__title">CUNG ỨNG NHÂN LỰC</h1>
              <ul className="style-ul">
                <li>Nhật Bản</li>
                <li>Hàn Quốc</li>
                <li>Úc</li>
                <li>Đức</li>
                <li>Đài Loan</li>
              </ul>
            </div>
            <div className="content-child">
              <h1 className="content-child__title">DU HỌC</h1>
              <ul className="style-ul">
                <li>Du học Nhật Bản</li>
                <li>Du học Hàn Quốc</li>
                <li>Du học Úc</li>
                <li>Du học Trung Quốc</li>
                <li>Du học Đức</li>
                <li>Các trường du học</li>
              </ul>
            </div>
            <div className="content-child">
              <h1 className="content-child__title">ĐÀO TẠO</h1>
              <ul className="style-ul">
                <li>Đào tạo ngoại ngữ</li>
                <li>Đào tạo trước du học</li>
                <li>Đào tạo trước lao động</li>
              </ul>
              <h1 className="content-child__title">MẠNG XÃ HỘI</h1>
              <ul className="style-ul-mxh">
                <li>
                  <img src={fb} alt="" className="li-mxh" />
                </li>
                <li>
                  <img src={tt} alt="" className="li-mxh" />
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
