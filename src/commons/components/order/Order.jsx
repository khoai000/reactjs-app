import React from "react";
import "./order.css";
import OderCard from "../oder-card/OderCard";
import { COUNTRY_TYPE } from "../../constants";
import Slider from "react-slick";
import prevArrow from "../../assets/left-arrow.png";
import nextArrow from "../../assets/right-arrow.png";

const orders = [
  {
    country: COUNTRY_TYPE.JAPAN,
    info: "Tuyển lao động làm việc tại Nhật nghề Xây dựng tổng hợp",
    count: 5,
    place: "FUKUSHIMA",
    salary: "",
    salaryExchange: "",
  },
  {
    country: COUNTRY_TYPE.JAPAN,
    info: "Tuyển Kỹ thuật viên làm việc tại Nhật Bản",
    count: 5,
    place: "TOKYO",
    salary: "",
    salaryExchange: "",
  },
  {
    country: COUNTRY_TYPE.KOREA,
    info: "Tuyển lao động làm Chế biến thủy sản tại Hàn Quốc",
    count: 10,
    place: "FUKUSHIMA",
    salary: "",
    salaryExchange: "",
  },
  {
    country: COUNTRY_TYPE.TAIWAN,
    info: "Tuyển lao động làm Chế biến thủy sản tại Nhật Bản",
    count: 30,
    place: "FUKUSHIMA",
    salary: "",
    salaryExchange: "",
  },
  {
    country: COUNTRY_TYPE.KOREA,
    info: "Tuyển lao động nông nghiệp làm việc tại Hàn Quốc",
    count: 10,
    place: "OSAKA",
    salary: "",
    salaryExchange: "",
  },
  {
    country: COUNTRY_TYPE.GERMANY,
    info: "Tuyển lao động điều dưỡng làm việc tại Đức",
    count: 3,
    place: "OSAKA",
    salary: "",
    salaryExchange: "",
  },
  {
    country: COUNTRY_TYPE.TAIWAN,
    info: "Tuyển lao động xây dựng làm việc tại Đài Loan",
    count: 20,
    place: "OSAKA",
    salary: "",
    salaryExchange: "",
  },
  {
    country: COUNTRY_TYPE.TAIWAN,
    info: "Tuyển lao động xây dựng làm việc tại Đài Loan",
    count: 20,
    place: "OSAKA",
    salary: "",
    salaryExchange: "",
  },
];

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "red" }}
    //   onClick={onClick}
    // />
    <img
      src={nextArrow}
      alt="prev"
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
};

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={prevArrow}
      alt="prev"
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
      }}
      onClick={onClick}
    />
  );
}

var settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 800,
  initialSlide: 0,
  centerMode: true,
  centerPadding: "80px",
  className: "center",
  pauseOnHover: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const Order = () => {
  return (
    <div className="order-wrap" id="order">
      <div className="!mt-10">
        <h1 className="!text-slate-900">DANH SÁCH ĐƠN HÀNG</h1>
      </div>
      <Slider {...settings}>
        {orders.map((item, index) => {
          return <OderCard props={{ ...item, title: index + 1 }} />;
        })}
      </Slider>
    </div>
  );
};

export default Order;
