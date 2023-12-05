import React from "react";
import "./banner.css";
import Header from "../header/Header";

const Banner = () => {
  return (
    <div className="bg-header flex items-center justify-center background_cover">
      <div className="container flex items-center justify-center z-10 -mt-[400px] -ml-[500px]">
        <div class="bg-content rounded-3xl transform -rotate-45 py-10">
          <div class="col-lg-6 col-12 mx-auto transform rotate-45">
            <p class="text-xl mb-4 italic">Welcome to bcnhr.com.vn</p>

            <h1>CÔNG TY CỔ PHẦN CUNG ỨNG NHÂN LỰC</h1>
            <h1 className="text-5xl">BCN QUỐC TẾ</h1>

            <div class="text-white mt-4 ">
              Đào tạo, du học, xuất khẩu lao động
            </div>
            <div class="text-white">Nhật, Hàn, Đài Loan, Đức</div>
          </div>
        </div>
      </div>

      {/* <div class="hero-slides"></div> */}
    </div>
  );
};

export default Banner;
