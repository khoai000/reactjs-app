import React from "react";
import menuIcon from "./assets/menu.png";
import "./florist.css";

const FloristPage = () => {
  return (
    <div>
      <div className="header fixed top-0 left-0 w-full z-[9999]">
        <div className="header-content w-10/12 flex flex-row justify-between items-center">
          <div className="header-logo">NHD</div>
          <div className="header-menu">
            <img src={menuIcon} alt="" />
          </div>
        </div>
      </div>

      <div className="split-background flex flex-col relative">
        <div className="top-section h-[50vh] bg-[#f4dfc5] text-[#111111]"></div>
        <div className="bottom-section h-[50vh] bg-white"></div>
      </div>
      <div className="slide-wrap">
        <div class="container">
          {/* <!-- BUTTONS (input/labels) --> */}
          <input
            type="radio"
            name="slider"
            id="slide-1-trigger"
            class="trigger"
            checked
          />
          <label class="btn" for="slide-1-trigger"></label>
          <input
            type="radio"
            name="slider"
            id="slide-2-trigger"
            class="trigger"
          />
          <label class="btn" for="slide-2-trigger"></label>
          <input
            type="radio"
            name="slider"
            id="slide-3-trigger"
            class="trigger"
          />
          <label class="btn" for="slide-3-trigger"></label>
          <input
            type="radio"
            name="slider"
            id="slide-4-trigger"
            class="trigger"
          />
          <label class="btn" for="slide-4-trigger"></label>

          {/* <!-- SLIDES --> */}
          <div class="slide-wrapper">
            <div id="slide-role">
              <div class="slide slide-1"></div>
              <div class="slide slide-2"></div>
              <div class="slide slide-3"></div>
              <div class="slide slide-4"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[50vh] bg-slate-300"></div>
    </div>
  );
};

export default FloristPage;
