import React from "react";
import "./header.css";
import logo from "../../assets/Logo_BCN.png";
import down from "../../assets/down.png";

const Header = () => {
  return (
    <div className="header-wrap">
      <nav className="">
        <a href="*" className="logo">
          <img src={logo} className="logo" />
        </a>
        <a href="*" className="glow-on-hover">
          Trang chủ
        </a>
        <div class="dropdown">
          <p className="glow-on-hover" onClick={(e) => e.preventDefault()}>
            Giới thiệu
            <img src={down} alt="expand" className="expand inline" />
          </p>
          <div class="dropdown-content">
            <a href="#about" className="text-center">
              Tổng quan
            </a>
            <a href="#license" className="text-center">
              Giấy phép HĐ
            </a>
          </div>
        </div>

        {/* <a href="#license" className="glow-on-hover">
          Đào tạo
        </a> */}
        <a href="#order" className="glow-on-hover">
          Đơn hàng
        </a>
        <a href="#" className="glow-on-hover">
          Tin tức
        </a>
        <div class="dropdown">
          <p
            // href=""
            className="glow-on-hover"
            onClick={(e) => e.preventDefault()}
          >
            Về BCN-HR
            <img src={down} alt="expand" className="expand inline" />
          </p>
          <div class="dropdown-content">
            <a href="#info" className="text-center">
              Về chúng tôi
            </a>
            <a href="#activity" className="text-center">
              Hoạt động
            </a>
            <a href="#review" className="text-center">
              Đánh giá
            </a>
          </div>
        </div>
        <a href="#footer" className="glow-on-hover">
          Liên hệ
        </a>
      </nav>
      <button className="Btn">
        <div className="sign">
          <svg viewBox="0 0 512 512">
            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
          </svg>
        </div>

        <div className="text">Admin</div>
      </button>
    </div>
  );
};

export default Header;
