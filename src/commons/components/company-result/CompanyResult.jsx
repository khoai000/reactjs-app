import React, { useEffect } from "react";
import "./company_result.css";
import person from "../../assets/people.png";
import orderList from "../../assets/checklist.png";
import ariplane from "../../assets/travelling.png";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

const CompanyResult = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 800,
    pauseOnHover: true,
  };
  return (
    <div className="activity-wrap">
      <div className="mt-12">
        <h1 className="">CÁC HOẠT ĐỘNG TẠI BCN HR</h1>
      </div>
      <div className="activity-achievements">
        <div class="achievement" data-aos="zoom-in">
          <div class="icon">
            <img src={person} alt="" />
          </div>
          <div class="info" data-aos="zoom-in">
            <h3>ỨNG VIÊN ĐĂNG KÝ</h3>
            <p>5212</p>
          </div>
        </div>
        <div class="achievement" data-aos="zoom-out">
          <div class="icon">
            <img src={orderList} alt="" />
          </div>
          <div class="info">
            <h3>ĐƠN TUYỂN</h3>
            <p>768</p>
          </div>
        </div>
        <div class="achievement" data-aos="zoom-in">
          <div class="icon">
            <img src={ariplane} alt="" />
          </div>
          <div class="info">
            <h3>HỌC VIÊN XUẤT CẢNH</h3>
            <p>2165</p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h1 className="">MỘT SỐ HÌNH ẢNH</h1>
      </div>

      <div class="timeline !-mt-4 pb-20">
        <div
          class="timeline__event  animated fadeInUp delay-3s timeline__event--type1"
          // id="slide1"
        >
          <div class="timeline__event__icon ">
            <i class="lni-cake"></i>
            <div class="timeline__event__date !text-slate-100">
              HOẠT ĐỘNG CÔNG TY
            </div>
          </div>
          <div class="timeline__event__content ">
            {/* <div class="timeline__event__title">Birthday</div> */}
            <div class="timeline__event__description">
              <Slider {...settings}>
                <div className="slide1_img1"></div>
                <div className="slide1_img2"></div>
                <div className="slide1_img3"></div>
                <div className="slide1_img4"></div>
                <div className="slide1_img5"></div>
                {/* <div className="slide1_img6"></div> */}
                <div className="slide1_img7"></div>
                <div className="slide1_img8"></div>
                <div className="slide1_img9"></div>
                <div className="slide1_img10"></div>
              </Slider>
            </div>
          </div>
        </div>
        <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
          <div class="timeline__event__icon">
            <i class="lni-burger"></i>
            <div class="timeline__event__date !text-slate-100">
              PHỎNG VẤN VÀ ĐÀO TẠO
            </div>
          </div>
          <div class="timeline__event__content">
            {/* <div class="timeline__event__title">Lunch</div> */}
            <div class="timeline__event__description">
              <Slider {...settings}>
                <div className="slide2_img1"></div>
                <div className="slide2_img2"></div>
                {/* <div className="slide2_img3"></div> */}
                <div className="slide2_img4"></div>
                <div className="slide2_img5"></div>
                <div className="slide2_img6"></div>
                <div className="slide2_img7"></div>
                <div className="slide2_img8"></div>
                <div className="slide2_img9"></div>
                {/* <div className="slide2_img10"></div> */}
              </Slider>
            </div>
          </div>
        </div>
        <div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
          <div class="timeline__event__icon">
            <i class="lni-slim"></i>
            <div class="timeline__event__date !text-slate-100">
              HÌNH ẢNH XUẤT CẢNH
            </div>
          </div>
          <div class="timeline__event__content">
            {/* <div class="timeline__event__title">Exercise</div> */}
            <div class="timeline__event__description">
              <Slider {...settings}>
                <div className="slide3_img1"></div>
                <div className="slide3_img2"></div>
                <div className="slide3_img3"></div>
                <div className="slide3_img4"></div>
                {/* <div className="slide3_img5"></div> */}
                <div className="slide3_img6"></div>
                <div className="slide3_img7"></div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyResult;
