import React from "react";
import "./about.css";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const About = () => {
  return (
    <div className="about-wrap">
      <div className="about flex flex-row">
        <div className="about-left">
          <div className="flex justify-center items-center p-6 h-full">
            <Slider {...settings}>
              <img
                src="https://i.ibb.co/3hDGSpZ/image1.jpg"
                alt="image1"
                border="0"
                className="rounded-lg"
              />
              <img
                src="https://i.ibb.co/3hDGSpZ/image1.jpg"
                alt="image1"
                border="0"
                className="rounded-lg"
              />
            </Slider>
            <img
              src="https://i.ibb.co/3hDGSpZ/image1.jpg"
              alt="image1"
              border="0"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="about-right"></div>
      </div>
    </div>
  );
};

export default About;
