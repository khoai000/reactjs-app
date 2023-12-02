import React from "react";
import "./order.css";
import OderCard from "../oderCard/OderCard";

const orders = [];

const Order = () => {
  return (
    <div className="order-wrap">
      <h1 className="mb-6 tex">Danh sách đơn hàng</h1>
      <div className="flex flex-row justify-around items-center flex-wrap flex-md-wrap">
        <OderCard />
        <OderCard />
        <OderCard />
        <OderCard />
      </div>
    </div>
  );
};

export default Order;
