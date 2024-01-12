import React from "react";
import menuIcon from "./assets/menu.png";
import "./florist.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import hoa1 from "./assets/2024_01_10_14_33_IMG_3344.JPG";
import hoa2 from "./assets/2024_01_10_14_38_IMG_3345.JPG";
import hoa3 from "./assets/2024_01_10_14_39_IMG_3346.JPG";
import hoa4 from "./assets/2024_01_10_14_39_IMG_3347.JPG";
import hoa5 from "./assets/2024_01_10_14_40_IMG_3348.JPG";
import hoa6 from "./assets/2024_01_10_14_40_IMG_3349.JPG";
import hoa7 from "./assets/2024_01_10_14_42_IMG_3351.JPG";
import hoa8 from "./assets/2024_01_10_14_43_IMG_3355.JPG";
import hoa9 from "./assets/2024_01_10_14_48_IMG_3358.JPG";

const FloristPage = () => {
  return (
    <div>
      <div className="header fixed top-0 left-0 w-full z-[9999]">
        <div className="header-content w-10/12 flex flex-row justify-between items-center">
          <div className="header-logo">NHD</div>
          <div className="header-menu">
            <img src={menuIcon} alt="" />
          </div>
        </div>
      </div>

      <div className="split-background flex flex-col relative">
        <div className="top-section h-[60vh] bg-[#f4dfc5]"></div>
        <div className="bottom-section h-[60vh] bg-white"></div>
        <div className="banner-content absolute z-10">
          <h1>Get in touch</h1>
          <h5>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt.
          </h5>
          <button class="btn-hover full-rounded">
            <span>Hover me</span>
            <div class="border full-rounded"></div>
          </button>
        </div>
        <div className="wiper-wrap">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            navigation={true}
            pagination={{
              type: "progressbar",
              clickable: true,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={hoa1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hoa2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hoa3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hoa4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hoa5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hoa6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hoa7} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hoa8} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hoa9} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* <div class="container-silde z-50">
        <input
          type="radio"
          name="slider"
          id="slide-1-trigger"
          class="trigger"
          checked
        />
        <label class="btn" for="slide-1-trigger"></label>
        <input
          type="radio"
          name="slider"
          id="slide-2-trigger"
          class="trigger"
        />
        <label class="btn" for="slide-2-trigger"></label>
        <input
          type="radio"
          name="slider"
          id="slide-3-trigger"
          class="trigger"
        />
        <label class="btn" for="slide-3-trigger"></label>
        <input
          type="radio"
          name="slider"
          id="slide-4-trigger"
          class="trigger"
        />
        <label class="btn" for="slide-4-trigger"></label>

        <div class="slide-wrapper">
          <div id="slide-role">
            <div class="slide slide-1"></div>
            <div class="slide slide-2"></div>
            <div class="slide slide-3"></div>
            <div class="slide slide-4"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FloristPage;
