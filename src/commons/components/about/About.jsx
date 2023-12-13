import React, { useEffect } from "react";
import "./about.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tooltip } from "antd";
import leverUP from "../../assets/level-up.png";
import service from "../../assets/customer-service.png";
import location from "../../assets/location.png";
import university from "../../images/cty2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="about-wrap" id="about">
      <div className="about-left" data-aos="slide-up" data-aos-offset="200">
        <img src={university} alt="" className="university-image rounded-2xl" />
      </div>
      <div className="about-right" data-aos="fade-left" data-aos-offset="200">
        <div className="">
          <h1 className="about-right__title1">
            CÔNG TY CỔ PHẦN CUNG ỨNG NHÂN LỰC
          </h1>
          <h1 className="about-right__title2">BCN QUỐC TẾ</h1>
        </div>
        <div className="about-right__link text-center">
          <p>BCN HR ,.JSC</p>
        </div>
        <div className="about-right__content">
          <img src={leverUP} alt="icon1" className="about-right__icon" />
          <p className="about-right__p">
            Sứ mệnh của BCN - HR là trở thành một trong những công ty hàng đầu
            trong lĩnh vực hợp tác và cung cấp nguồn cung ứng nhân lực Việt cho
            các doanh nghiệp nước ngoài. Bắt đầu với việc lựa chọn đúng người,
            đúng công việc, chúng tôi tiến hành quản lý và đào tạo một cách kỹ
            lưỡng để đáp ứng linh hoạt nhu cầu của các đối tác khách hàng.
          </p>
        </div>
        <div className="about-right__content">
          <img src={service} alt="icon2" className="about-right__icon" />
          <p className="about-right__p">
            Cung cấp cho đối tác khách hàng các sản phẩm, dịch vụ có chất lượng
            phù hợp, giá cả cạnh tranh. Hài hòa lợi ích doanh nghiệp với lợi ích
            xã hội, đóng góp tích cực vào các hoạt động hướng tới cộng đồng.
          </p>
        </div>
        <div className="about-right__content">
          <img src={location} alt="icon3" className="about-right__icon" />
          <p className="about-right__p">
            Với trên 40 chi nhánh và văn phòng trải khắp cả nước, chúng tôi tự
            hào là một đơn vị lớn mạnh, đưa các chương trình của doanh nghiệp
            nước ngoài tiếp cận gần hơn tới khắp nơi trên mọi miền tổ quốc.
          </p>
        </div>
        <div className="address-btn">
          <Tooltip
            title="Xem chi tiết danh sách địa chỉ trên cả nước của chúng tôi tại đây"
            color="cyan"
            placement="topLeft"
            className="comic-button"
          >
            <button class="">Địa chỉ!</button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default About;
