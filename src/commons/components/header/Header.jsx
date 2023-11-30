import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="h-[70px] m-7 rounded-lg flex flex-row items-center justify-between bg-slate-300 bg-header z-10">
      <div className="h-full flex items-center basis-1/5">
        <img
          src="https://i.ibb.co/1dHnJZh/Logo-BCN.png"
          alt="Logo-BCN"
          border="0"
          className="object-fill w-24 ml-6 -mt-4"
        />
        {/* <div className="w-24">
          <p>CTCP Cung Ứng Nhân Lực</p>
        </div> */}
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
  );
};

export default Header;
