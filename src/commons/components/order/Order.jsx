import React from "react";
import "./order.css";
import OderCard from "../oder-card/OderCard";
import { COUNTRY_TYPE } from "../../constants";

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

const Order = () => {
  return (
    <div className="order-wrap">
      <div className="-mb-4 mt-4">
        <h1 className="">DANH SÁCH ĐƠN HÀNG</h1>
      </div>
      <div className="flex flex-row justify-around items-center flex-wrap">
        {orders.map((item, index) => {
          return <OderCard props={{ ...item, title: index + 1 }} />;
        })}
      </div>
    </div>
  );
};

export default Order;
