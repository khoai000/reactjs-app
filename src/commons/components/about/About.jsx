import React from "react";
import "./about.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
};

const About = () => {
  return (
    <div className="about-wrap">
      <div className="about flex flex-row">
        <div className="about-left">
          <div className="flex justify-center items-center p-6 h-full">
            <Slider {...settings} className="w-[550px]">
              <img
                src="https://i.ibb.co/2y0s2qj/bg-image2.jpg"
                alt="bg-image2"
                className="rounded-3xl"
              />
              <img
                src="https://i.ibb.co/2y0s2qj/bg-image2.jpg"
                alt="bg-image2"
                className="rounded-3xl"
              />
              {/* <img
                src="https://i.ibb.co/2y0s2qj/bg-image2.jpg"
                alt="bg-image2"
                className="rounded-2xl"
              />
              <img
                src="https://i.ibb.co/2y0s2qj/bg-image2.jpg"
                alt="bg-image2"
                className="rounded-2lg"
              /> */}
            </Slider>
          </div>
        </div>
        <div className="about-right flex justify-center items-center">
          <div className="px-8">
            <div>
              <p>http://bcnhr.com.vn/</p>
            </div>
            <div className="">
              <h1 className="text-slate-950">CTCP CUNG ỨNG NHÂN LỰC</h1>
              <h1 className="text-5xl text-slate-950">BCN QUỐC TẾ</h1>
            </div>
            <div className="">
              <p>
                BCN-HR trở thành công ty hàng đầu trong lĩnh vực cung cấp nguồn
                nhân lực; hoạt động hiệu quả và phát triển bền vững; là sự lựa
                chọn của các đối tác trong và ngoài nước.
              </p>
            </div>
            <div className="">
              <p>
                Cung cấp cho khách hàng các sản phẩm, dịch vụ có chất lượng phù
                hợp, giá cả cạnh tranh. Hài hòa lợi ích doanh nghiệp với lợi ích
                xã hội, đóng góp tích cực vào các hoạt động hướng tới cộng đồng.
              </p>
            </div>
            <div className="">
              <p>
                Trung tâm đào tạo riêng biệt với 40 phòng học đạt chuẩn, được
                trang bị đầy đủ các thiết bị công nghệ thông tin phục vụ cho quá
                trình giảng dạy và học tập
              </p>
              <p>Xem địa chỉ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
