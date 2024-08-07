import React, { useEffect } from "react";
import "./florist.css";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import icon
import menuIcon from "./assets/icon/menu.png";
import fbIcon from "./assets/icon/facebook.png";
import zaloIcon from "./assets/icon/zalo-icon.png";
import phoneIcon from "./assets/icon/telephone-call.png";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// import image
import hoa1 from "./assets/2024_01_10_14_33_IMG_3344.JPG";
import hoa2 from "./assets/2024_01_10_14_38_IMG_3345.JPG";
import hoa3 from "./assets/2024_01_10_14_39_IMG_3346.JPG";
import hoa4 from "./assets/2024_01_10_14_39_IMG_3347.JPG";
import hoa5 from "./assets/2024_01_10_14_40_IMG_3348.JPG";
import hoa6 from "./assets/2024_01_10_14_40_IMG_3349.JPG";
import hoa7 from "./assets/2024_01_10_14_42_IMG_3351.JPG";
import hoa8 from "./assets/2024_01_10_14_43_IMG_3355.JPG";
import hoa9 from "./assets/2024_01_10_14_48_IMG_3358.JPG";
cxnvbjndj
dfngndjfn
dfgnjdf
const FloristPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="header fixed top-0 left-0 w-full z-[9999]">
        <div className="header-content w-10/12 flex flex-row justify-between items-center">
          <div className="header-logo">NHD</div>
          <div className="header-menu">
            <img src={menuIcon} alt="" />
          </div>
        </div>
      </div>

      <div className="split-background relative">
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

      <div className="contact bg-[#f4dfc5] flex flex-col items-center">
        <h1 data-aos="zoom-in">Về chúng tôi</h1>
        <h5 data-aos="zoom-in-up">
          Chào mừng đến với dịch vụ của chúng tôi, nơi nghệ thuật và sáng tạo
          hội tụ, tạo ra những bức tranh hoa tươi mới và lãng mạn. Với đội ngũ
          chuyên nghiệp, chúng tôi cam kết mang đến thiết kế hoa độc đáo, phản
          ánh sự quan tâm và ý nghĩa. Không chỉ cung cấp dịch vụ theo dịp, chúng
          tôi tư vấn và đáp ứng theo phong cách riêng của bạn, biến những khung
          cảnh quen thuộc thành trải nghiệm đầy hương thơm và màu sắc tuyệt vời.
        </h5>
        <h2
        // data-aos="zoom-out-right"
        >
          Thời gian
        </h2>
        <h6
        // data-aos="zoom-out-left"
        >
          Nhận tư vấn: <strong className="font-bold neonText">24/7</strong> -
          Thời gian làm việc:{" "}
          <strong className="font-bold neonText">{`Thứ 2 - Thứ 7 | 7H30 - 18H30`}</strong>
        </h6>
        <h2
        // data-aos="flip-left"
        // data-aos-easing="ease-out-cubic"
        // data-aos-duration="2000"
        >
          Liên hệ với chúng tôi
        </h2>
        <div
          className="contact-icon flex flex-row justify-center gap-x-12"
          // data-aos="flip-right"
          // data-aos-easing="ease-out-cubic"
          // data-aos-duration="2000"
        >
          <a href="">
            <img src={fbIcon} alt="" className="" />
          </a>
          <a href="">
            <img src={zaloIcon} alt="" className="" />
          </a>
          <a href="">
            <img src={phoneIcon} alt="" className="" />
          </a>
        </div>
      </div>

      <div className="license text-center">
        Copyright © 2024 hoatuoimoingay.shop - All rights reserved.
      </div>
    </div>
  );
};

export default FloristPage;
