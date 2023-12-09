import React from "react";
import "./order.css";
import OderCard from "../oder-card/OderCard";
import { COUNTRY_TYPE } from "../../constants";
import Slider from "react-slick";
import prevArrow from "../../assets/left-arrow.png";
import nextArrow from "../../assets/right-arrow.png";
import { useMediaQuery } from "react-responsive";

const orders = [
  {
    country: COUNTRY_TYPE.JAPAN,
    info: "Tuyển lao động làm việc tại Nhật nghề Xây dựng tổng hợp",
    count: 5,
    place: "FUKUSHIMA",
    salary: "200",
    salaryExchange: "33.43",
  },
  {
    country: COUNTRY_TYPE.JAPAN,
    info: "Tuyển Kỹ thuật viên làm việc tại Nhật Bản",
    count: 5,
    place: "TOKYO",
    salary: "230",
    salaryExchange: "38.44",
  },
  {
    country: COUNTRY_TYPE.KOREA,
    info: "Tuyển lao động làm Chế biến thủy sản tại Hàn Quốc",
    count: 10,
    place: "FUKUSHIMA",
    salary: "1,800",
    salaryExchange: "33.09",
  },
  {
    country: COUNTRY_TYPE.TAIWAN,
    info: "Tuyển lao động làm Chế biến thủy sản tại Đài Loan",
    count: 30,
    place: "Đài Bắc",
    salary: "35",
    salaryExchange: "26.94",
  },
  {
    country: COUNTRY_TYPE.KOREA,
    info: "Tuyển lao động nông nghiệp làm việc tại Hàn Quốc",
    count: 10,
    place: "Jeju",
    salary: "1,700",
    salaryExchange: "31.25",
  },
  {
    country: COUNTRY_TYPE.GERMANY,
    info: "Tuyển lao động điều dưỡng làm việc tại Đức",
    count: 3,
    place: "Berlin",
    salary: "1.25",
    salaryExchange: "32.6",
  },
  {
    country: COUNTRY_TYPE.KOREA,
    info: "Tuyển lao động xây dựng làm việc tại Đài Loan",
    count: 20,
    place: "Gangwon",
    salary: "2,000",
    salaryExchange: "36.77",
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
      style={{
        ...style,
        display: "block",
        width: "48px",
        height: "48px",
        zIndex: 1,
      }}
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
        width: "48px",
        height: "48px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

const Order = () => {
  const isMobile = useMediaQuery({ maxWidth: 599 });
  const isTabletLap = useMediaQuery({ minWidth: 600, maxWidth: 1366 });
  const isDesktopLarge = useMediaQuery({ minWidth: 1367 });

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: isTabletLap ? 2 : isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 800,
    initialSlide: 0,
    centerMode: true,
    centerPadding: "80px",
    className: "center",
    pauseOnHover: true,
    nextArrow: <SampleNextArrow classNam="next-arrow" />,
    prevArrow: <SamplePrevArrow classNam="prev-arrow" />,
  };

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
