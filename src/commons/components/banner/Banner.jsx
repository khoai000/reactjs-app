import React from "react";
import "./banner.css";
import logo from "../../assets/Logo_BCN.png";

const Banner = () => {
  return (
    <div className="bg-header flex items-center justify-center background_cover">
      <div className=" flex items-center justify-center z-10 -mt-[400px]">
        <div class="bg-content rounded-3xl  py-10">
          <div class=" ">
            <p class="text-2xl mb-4 italic text-slate-800">
              Welcome to bcnhr.com.vn
            </p>

            <h1 className="text-slate-950 text-5xl">
              CÔNG TY CỔ PHẦN CUNG ỨNG NHÂN LỰC
            </h1>
            <h1 className="text-6xl text-slate-950 mt-4">BCN QUỐC TẾ</h1>

            <div className="flex justify-center mt-3">
              <img
                src={logo}
                alt="logo"
                className="h-24 w-24 shadow-rose-500 shadow-xl rounded-full"
              />
            </div>
            <div class="text-slate-800 text-2xl font-medium mt-3">
              Đào tạo du học, xuất khẩu lao động
            </div>
            <div class="text-slate-800 text-[27px] font-medium">
              Nhật Bản, Hàn Quốc, Đài Loan, Đức
            </div>
          </div>
        </div>
      </div>

      {/* <div class="hero-slides"></div> */}
    </div>
  );
};

export default Banner;
