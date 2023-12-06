import React from "react";
import "./banner.css";
import Header from "../header/Header";

const Banner = () => {
  return (
    <div className="bg-header flex items-center justify-center background_cover">
      <div className=" flex items-center justify-center z-10 -mt-[450px]">
        <div class="bg-content rounded-3xl  py-10">
          <div class=" ">
            <p class="text-xl mb-4 italic text-slate-800">
              Welcome to bcnhr.com.vn
            </p>

            <h1 className="text-slate-950 text-4xl">
              CÔNG TY CỔ PHẦN CUNG ỨNG NHÂN LỰC
            </h1>
            <h1 className="text-6xl text-slate-950 mt-2">BCN QUỐC TẾ</h1>

            <div class="text-slate-950 text-xl mt-4">
              Đào tạo, du học, xuất khẩu lao động
            </div>
            <div class="text-slate-950 text-xl">Nhật, Hàn, Đài Loan, Đức</div>
          </div>
        </div>
      </div>

      {/* <div class="hero-slides"></div> */}
    </div>
  );
};

export default Banner;
