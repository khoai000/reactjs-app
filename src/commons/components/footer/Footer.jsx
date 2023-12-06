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
                  <span class="ml-2 text-2xl font-bold tracking-wide text-gray-800 text-center">
                    CÔNG TY CỔ PHẦN CUNG ỨNG NHÂN LỰC <br /> BCN QUỐC TẾ
                  </span>
                </a>
                <div class="mt-6 lg:max-w-xl">
                  <p class="text-lg text-gray-800">
                    Trụ sở chính:{" "}
                    <strong>
                      BT9 - Lô NO12, Khu Đô Thị Mới Dịch Vọng - Phường Dịch Vọng
                      - Quận Cầu Giấy - Hà Nội.
                    </strong>
                  </p>
                </div>
                <div class="mt-1 lg:max-w-xl">
                  <p class="text-lg text-gray-800">
                    Văn phòng tại Hà Nội:{" "}
                    <strong>
                      Tòa nhà A2 - D6 - Ngõ 5 - Phố Thọ Tháp - Phường Dịch Vọng
                      - Quận Cầu Giấy - Hà Nội
                    </strong>
                  </p>
                </div>
                <div class="mt-1 lg:max-w-xl">
                  <p class="text-lg text-gray-800">
                    Văn phòng tại HCM:{" "}
                    <strong>
                      Số 1/12, Đường 21, Phường 8, Quận Gò Vấp, Tp. HCM
                    </strong>
                  </p>
                </div>
                <div class="mt-1 lg:max-w-xl">
                  <p class="text-lg text-gray-800">
                    Hotline: <strong>024 3791 8534 - 097 626 5599</strong>
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
