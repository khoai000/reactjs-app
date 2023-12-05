import React from "react";
import "./footer.css";
import logo from "../../assets/Logo_BCN.png";
const Footer = () => {
  return (
    <>
      <footer className="new_footer_area bg_color">
        <div className="new_footer_top">
          <footer class="px-3 pt-4 lg:px-9 border-t-2 bg-gray-50">
            <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
              <div class="sm:col-span-2">
                <a href="#" class="inline-flex items-center">
                  <img src={logo} alt="logo" class="h-20 w-20" />
                  <span class="ml-2 text-xl font-bold tracking-wide text-gray-800">
                    Company Name
                  </span>
                </a>
                <div class="mt-6 lg:max-w-xl">
                  <p class="text-sm text-gray-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi felis mi, faucibus dignissim lorem id, imperdiet
                    interdum mauris. Vestibulum ultrices sed libero non porta.
                    Vivamus malesuada urna eu nibh malesuada, non finibus massa
                    laoreet. Nunc nisi velit, feugiat a semper quis, pulvinar id
                    libero. Vivamus mi diam, consectetur non orci ut, tincidunt
                    pretium justo. In vehicula porta molestie. Suspendisse
                    potenti.
                  </p>
                </div>
              </div>

              <div class="flex flex-col gap-2 text-sm">
                <p class="text-base font-bold tracking-wide text-gray-900">
                  Popular Courses
                </p>
                <a href="#">UPSC - Union Public Service Commission</a>
                <a href="#">General Knowledge</a>
                <a href="#">MBA</a>
                <p class="text-base font-bold tracking-wide text-gray-900">
                  Popular Topics
                </p>
                <a href="#">Human Resource Management</a>
                <a href="#">Operations Management</a>
                <a href="#">Marketing Management</a>
              </div>

              <div>
                <p class="text-base font-bold tracking-wide text-gray-900">
                  COMPANY IS ALSO AVAILABLE ON
                </p>
                <div class="flex items-center gap-1 px-2">
                  <a href="#" class="w-full min-w-xl">
                    <img
                      src="https://mcqmate.com/public/images/icons/playstore.svg"
                      alt="Playstore Button"
                      class="h-10"
                    />
                  </a>
                  <a
                    class="w-full min-w-xl"
                    href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA"
                  >
                    <img
                      src="https://mcqmate.com/public/images/icons/youtube.svg"
                      alt="Youtube Button"
                      class="h-28"
                    />
                  </a>
                </div>
                <p class="text-base font-bold tracking-wide text-gray-900">
                  Contacts
                </p>
                <div class="flex">
                  <p class="mr-1 text-gray-800">Email:</p>
                  <a href="#" title="send email">
                    admin@company.com
                  </a>
                </div>
              </div>
            </div>
          </footer>
          {/* <div className="container-info">
            <div>
              <img src={logo} alt="" />
            </div>
          </div> */}
          <div className="footer_bg ">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>
        {/* <div className="footer_bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-7">
              <p className="mb-0 f_400">
                © cakecounter Inc.. 2019 All rights reserved.
              </p>
            </div>
            <div className="col-lg-6 col-sm-5 text-right">
              <p>
                Made with <i className="icon_heart"></i> in{" "}
                <a href="http://cakecounter.com" target="_blank">
                  CakeCounter
                </a>
              </p>
            </div>
          </div>
        </div>
      </div> */}
      </footer>
    </>
  );
};

export default Footer;
