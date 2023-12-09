import React, { useCallback, useEffect } from "react";
import "./order_card.css";
import korea from "../../assets/south-korea.png";
import japan from "../../assets/japan.png";
import taiwan from "../../assets/taiwan.png";
import germany from "../../assets/germany.png";
import { COUNTRY_TYPE } from "../../constants";

const TypeMapCountry = {
  [COUNTRY_TYPE.KOREA]: korea,
  [COUNTRY_TYPE.JAPAN]: japan,
  [COUNTRY_TYPE.TAIWAN]: taiwan,
  [COUNTRY_TYPE.GERMANY]: germany,
};

const TypeMapMoney = {
  [COUNTRY_TYPE.KOREA]: "Won",
  [COUNTRY_TYPE.JAPAN]: "Yên",
  [COUNTRY_TYPE.TAIWAN]: "Đài tệ",
  [COUNTRY_TYPE.GERMANY]: "Euro",
};

const RATE_KOREA = 18.3866;
const RATE_JAPAN = 167.155;
const RATE_TAIWAN = 769.683;
const RATE_GERMANY = 26078.7;

const OderCard = ({ props }) => {
  // const calculatorSalary = useCallback((country, salary) => {
  //   switch (country) {
  //     case country === COUNTRY_TYPE.KOREA:
  //       return (salary || 0) * RATE_KOREA;
  //     case country === COUNTRY_TYPE.JAPAN:
  //       return salary * RATE_JAPAN;
  //     case country === COUNTRY_TYPE.TAIWAN:
  //       return salary * RATE_TAIWAN;
  //     case country === COUNTRY_TYPE.GERMANY:
  //       return salary * RATE_GERMANY;
  //     default:
  //       break;
  //   }
  // }, []);

  return (
    <div class="plan">
      <div class="inner">
        <div class="pricing flex justify-center">
          <img
            src={props.country ? TypeMapCountry[props.country] : japan}
            alt="flag"
          />
        </div>
        <p class="title font-extrabold text-3xl">
          Đơn hàng {props.title || ""}
        </p>
        <div class="info text-xl text-red-900 font-bold h-9 !mb-6">
          {props.info || "Tuyển lao động làm việc nước ngoài."}
        </div>
        <ul class="features">
          <li>
            <span class="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  fill="currentColor"
                  d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                ></path>
              </svg>
            </span>
            <span>
              Số lượng:{" "}
              <strong className="uppercase">{props.count || 10}</strong>
            </span>
          </li>
          <li>
            <span class="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  fill="currentColor"
                  d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                ></path>
              </svg>
            </span>
            <span className="">
              Nơi làm việc:{" "}
              <strong className="uppercase">
                {props.place || "FUKUSHIMA"}
              </strong>
            </span>
          </li>
          <li>
            <span class="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  fill="currentColor"
                  d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                ></path>
              </svg>
            </span>
            <span>
              Lương cơ bản:{" "}
              <strong className="uppercase">{`${props.salary || "190"}K ${
                TypeMapMoney[props.country]
              }`}</strong>
            </span>
          </li>
          <li>
            <span class="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  fill="currentColor"
                  d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                ></path>
              </svg>
            </span>
            <span>
              Lương quy đổi:{" "}
              <strong className="uppercase">
                {`${props.salaryExchange || 0}M VNĐ`}
              </strong>
            </span>
          </li>
        </ul>
        <div class="action !mt-6">
          <div class="button" href="#">
            Xem chi tiết
          </div>
        </div>
      </div>
    </div>
  );
};

export default OderCard;
