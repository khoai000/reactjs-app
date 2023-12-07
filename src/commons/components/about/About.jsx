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
      duration: 2000,
    });
  }, []);
  return (
    <div className="about-wrap flex flex-row">
      <div className="about-left" data-aos="slide-up" data-aos-offset="200">
        <img src={university} alt="" width={400} className="rounded-2xl" />
      </div>
      <div
        className="about-right flex justify-center items-center"
        data-aos="fade-left"
        data-aos-offset="500"
      >
        <div className="pr-24">
          <div className="mb-3 text-4xl">
            <h1 className="about-right__title text-3xl !text-slate-800">
              CÔNG TY CỔ PHẦN CUNG ỨNG NHÂN LỰC
            </h1>
            <h1 className="about-right__title text-5xl mt-2 !text-slate-800">
              BCN QUỐC TẾ
            </h1>
          </div>
          <div className="about-right__link text-center">
            <p>http://bcnhr.com.vn/</p>
          </div>
          <div className="about-right__content">
            <img src={leverUP} alt="icon1" className="" />
            <p className="">
              BCN-HR trở thành công ty hàng đầu trong lĩnh vực cung cấp nguồn
              nhân lực; hoạt động hiệu quả và phát triển bền vững; là sự lựa
              chọn của các đối tác trong và ngoài nước.
            </p>
          </div>
          <div className="about-right__content">
            <img src={service} alt="icon2" className="" />
            <p>
              Cung cấp cho khách hàng các sản phẩm, dịch vụ có chất lượng phù
              hợp, giá cả cạnh tranh. Hài hòa lợi ích doanh nghiệp với lợi ích
              xã hội, đóng góp tích cực vào các hoạt động hướng tới cộng đồng.
            </p>
          </div>
          <div className="about-right__content">
            <img src={location} alt="icon3" className="" />
            <p>
              Với trên 40 chi nhánh và văn phòng trải khắp cả nước, được trang
              bị đầy đủ các thiết bị công nghệ thông tin phục vụ cho quá trình
              giảng dạy và học tập
            </p>
          </div>
          <div className="mt-6">
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
    </div>
  );
};

export default About;
