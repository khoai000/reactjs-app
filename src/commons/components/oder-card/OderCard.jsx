import React from "react";
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

const OderCard = ({ props }) => {
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
              Số lượng: <strong>{props.count || 10}</strong>
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
              Nơi làm việc: <strong>{props.place || "FUKUSHIMA"}</strong>
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
              Lương cơ bản: <strong>{props.salary || "190K YÊN"}</strong>
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
              <strong>{props.salaryExchange || "30M VNĐ"}</strong>
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
