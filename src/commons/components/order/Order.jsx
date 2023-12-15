import React from "react";
import "./order.css";
import OderCard from "../oder-card/OderCard";
import { COUNTRY_TYPE } from "../../constants";
import Slider from "react-slick";
import prevArrow from "../../assets/left-arrow.png";
import nextArrow from "../../assets/right-arrow.png";
import showAll from "../../assets/up-right-arrow.png";
import { useMediaQuery } from "react-responsive";

const orders = [
  {
    country: COUNTRY_TYPE.JAPAN,
    info: "Chế biến thủy sản",
    count: "12 nữ, 5 nam",
    place: "FUKUSHIMA",
    salary: "1100￥/h",
    status: "Tuyển ngay",
  },
  {
    country: COUNTRY_TYPE.JAPAN,
    info: "Lắp ráp linh kiện điện tử",
    count: "10 nữ",
    place: "Okazaki - Aichi",
    salary: "1250￥/h",
    status: "Tuyển ngay",
  },
  {
    country: COUNTRY_TYPE.JAPAN,
    info: "Kỹ sư cơ khí",
    count: "3 nam",
    place: "Saitama",
    salary: "280.000￥/tháng",
    status: "Tuyển ngay",
  },
  {
    country: COUNTRY_TYPE.JAPAN,
    info: "Điều dưỡng, hộ lý",
    count: "20 nữ",
    place: "Tokyo",
    salary: "1080￥/h",
    status: "Tuyển ngay",
  },
  {
    country: COUNTRY_TYPE.KOREA,
    info: "Du học Hàn Quốc - Du học Thạc sĩ",
    count: "Không giới hạn",
    place: "Hàn Quốc",
    salary: "",
    status: "Tuyển ngay",
  },
  {
    country: COUNTRY_TYPE.GERMANY,
    info: "Điều dưỡng tại Đức",
    count: "Không giới hạn",
    place: "Đức",
    salary: "",
    status: "Tuyển ngay",
  },
  {
    country: COUNTRY_TYPE.AUS,
    info: "Du học Úc",
    count: 20,
    place: "Úc",
    salary: "",
    status: "Tuyển ngay",
  },
];

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <img
      src={nextArrow}
      alt="prev"
      className={className}
      // style={{
      //   ...style,
      //   display: "block",
      //   width: "48px",
      //   height: "48px",
      //   zIndex: 100,
      // }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <img
      src={prevArrow}
      alt="prev"
      className={className}
      // style={{
      //   ...style,
      //   display: "block",
      //   width: "48px",
      //   height: "48px",
      //   zIndex: 1,
      // }}
      onClick={onClick}
    />
  );
};

const Order = () => {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const isTabletLap = useMediaQuery({ minWidth: 1024, maxWidth: 1535 });
  const isDesktopLarge = useMediaQuery({ minWidth: 1536 });

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: isTabletLap ? 2 : isMobile ? 1 : 3,
    slidesToScroll: 1,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 800,
    initialSlide: 0,
    centerMode: true,
    className: "center",
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="order-wrap" id="order">
      <div className="show-wrap">
        <div className="show-all2 opacity-0" aria-disabled>
          <p>Xem tất cả</p>
          <img src={showAll} alt="show-all" className="show-icon" />
        </div>
        <h1 className="uppercase order-title">Đơn hàng nổi bật</h1>
        <div className="show-all2">
          <p>Xem tất cả</p>
          <img src={showAll} alt="show-all" className="show-icon" />
        </div>
      </div>
      <Slider {...settings}>
        {orders.map((item, index) => {
          return <OderCard props={item} />;
        })}
      </Slider>
    </div>
  );
};

export default Order;
