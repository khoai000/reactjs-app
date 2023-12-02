import React from "react";
import "./header.css";
import logo from "../../assets/Logo_BCN.png";

const Header = () => {
  return (
    <div className="header-wrap">
      <div className=" h-[70px] my-8 rounded-lg flex flex-row items-center justify-between ">
        <div className="h-full flex items-center basis-1/5">
          <img
            src={logo}
            alt="logo"
            border="0"
            className="object-fill w-24 ml-6 -mt-4"
          />
        </div>
        <ul className="flex flex-row text-lg mr-9 font-semibold">
          <li className="text">
            <a href="/">Trang chủ</a>
          </li>
          <li className="text">
            <a href="/">Giới thiệu</a>
          </li>
          <li className="text">
            <a href="/">Đơn hàng</a>
          </li>
          <li className="text">
            <a href="/">Đánh giá</a>
          </li>
          <li className="text">
            <a href="/">Liên hệ</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
