import React from "react";
import "./company_result.css";
import person from "../../assets/people.png";
import orderList from "../../assets/checklist.png";
import ariplane from "../../assets/travelling.png";
import Slider from "react-slick";

const CompanyResult = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 800,
    // cssEase: "linear",
  };
  return (
    <div className="activity-wrap">
      <div className="mt-4">
        <h1 className="">CÁC HOẠT ĐỘNG TẠI BCN HR</h1>
      </div>
      <div className="activity-achievements">
        <div class="achievement">
          <div class="icon">
            <img src={person} alt="" />
          </div>
          <div class="info">
            <h3>ỨNG VIÊN ĐĂNG KÝ</h3>
            <p>5212</p>
          </div>
        </div>
        <div class="achievement">
          <div class="icon">
            <img src={orderList} alt="" />
          </div>
          <div class="info">
            <h3>ĐƠN TUYỂN</h3>
            <p>768</p>
          </div>
        </div>
        <div class="achievement">
          <div class="icon">
            <img src={ariplane} alt="" />
          </div>
          <div class="info">
            <h3>HỌC VIÊN XUẤT CẢNH</h3>
            <p>2165</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="">MỘT SỐ HÌNH ẢNH</h1>
      </div>

      <div class="timeline !-mt-4">
        <div
          class="timeline__event  animated fadeInUp delay-3s timeline__event--type1"
          id="slide1"
        >
          <div class="timeline__event__icon ">
            <i class="lni-cake"></i>
            <div class="timeline__event__date">HOẠT ĐỘNG CÔNG TY</div>
          </div>
          <div class="timeline__event__content ">
            {/* <div class="timeline__event__title">Birthday</div> */}
            <div class="timeline__event__description">
              <Slider {...settings}>
                <div className="slide1_img1"></div>
                <div className="slide1_img2"></div>
                <div className="slide1_img3"></div>
              </Slider>
            </div>
          </div>
        </div>
        <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
          <div class="timeline__event__icon">
            <i class="lni-burger"></i>
            <div class="timeline__event__date">PHỎNG VẤN VÀ ĐÀO TẠO</div>
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
                <div className="slide2_img10"></div>
              </Slider>
            </div>
          </div>
        </div>
        <div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
          <div class="timeline__event__icon">
            <i class="lni-slim"></i>
            <div class="timeline__event__date">HÌNH ẢNH ỨNG VIÊN</div>
          </div>
          <div class="timeline__event__content">
            {/* <div class="timeline__event__title">Exercise</div> */}
            <div class="timeline__event__description">
              <Slider {...settings}>
                <div className="slide3_img1"></div>
                <div className="slide3_img2"></div>
                <div className="slide3_img3"></div>
                <div className="slide3_img4"></div>
                <div className="slide3_img5"></div>
                <div className="slide3_img6"></div>
                <div className="slide3_img7"></div>
                {/* <div className="slide3_img8"></div>
                <div className="slide3_img9"></div>
                <div className="slide3_img10"></div> */}
              </Slider>
            </div>
          </div>
        </div>
        {/* <div class="timeline__event animated fadeInUp timeline__event--type1">
          <div class="timeline__event__icon">
            <i class="lni-cake"></i>
            <div class="timeline__event__date">20-08-2019</div>
          </div>
          <div class="timeline__event__content">
            <div class="timeline__event__title">Birthday</div>
            <div class="timeline__event__description">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam
                corporis incidunt reprehenderit accusantium id aut architecto
                harum quidem dolorem in!
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CompanyResult;
