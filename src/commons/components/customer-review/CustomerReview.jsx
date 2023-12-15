import React from "react";
import "./customer-review.css";
import wm1 from "../../assets/wm1.jpg";
import wm2 from "../../assets/wm2.jpg";
import wm3 from "../../assets/wm3.jpg";
import wm4 from "../../assets/wm4.jpg";
import m1 from "../../assets/m1.jpg";
import m2 from "../../assets/m2.jpg";

const CustomerReview = () => {
  return (
    <div classNameName="review-wrap" id="review">
      <div className="flex items-center justify-center pb-12">
        <div className="w-full border-t border-b border-gray-200 px-5 text-gray-800">
          <div className="w-full max-w-full mx-auto">
            <div className="text-center w-full mx-auto ">
              <h1 className="review-title1">KHÁCH HÀNG NÓI GÌ VỀ</h1>
              <br />
              <h3 className="review-title2">
                CÔNG TY CỔ PHẦN CUNG ỨNG NHÂN LỰC BCN QUỐC TẾ
              </h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div className="-mx-3 md:flex flex items-start justify-around review-content">
              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-slate-200 border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center xl:gap-3">
                    <div className="overflow-hidden rounded-full bg-avt bg-slate-50 border border-gray-200">
                      <img src={wm1} alt="" />
                    </div>
                    <div className="h-max">
                      <h6 className="review-content__name font-bold uppercase text-gray-700">
                        Trần Thị Nga
                      </h6>
                      <p className="review-content__info">Phụ huynh học sinh</p>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Trung tâm du học này là lựa chọn xuất sắc! Hỗ trợ tận tâm
                      từ đội ngũ tư vấn, giúp tôi tự tin hơn về quyết định du
                      học của con. Giáo viên chất lượng, và môi trường học quốc
                      tế làm cho trải nghiệm học tập của con tôi trở nên đặc
                      biệt.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full  bg-avt  border border-gray-200">
                      <img src={wm2} alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="review-content__name font-bold uppercase text-gray-600">
                        Nguyễn Thị Vân Anh
                      </h6>
                      <p className="review-content__info">Phụ huynh học sinh</p>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Trung tâm xuất khẩu lao động này đã giúp em tôi có cơ hội
                      làm việc ở nước ngoài một cách thuận lợi. Quy trình tư vấn
                      và thủ tục được thực hiện chuyên nghiệp, giúp em tôi tự
                      tin hơn khi bắt đầu công việc mới ở đất khách.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full  bg-avt  border border-gray-200">
                      <img src={m1} alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold review-content__name uppercase text-gray-600">
                        Nguyễn Văn An
                      </h6>
                      <p className="review-content__info">
                        {" "}
                        Du học sinh Nhật, tháng 4 năm 2022{" "}
                      </p>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Dịch vụ của trung tâm du học sinh rất đáng tin cậy. Tôi đã
                      được hỗ trợ mọi thứ từ việc chuẩn bị hồ sơ đến khi tìm
                      kiếm chỗ ở tại quốc gia mới. Điều này thực sự giảm bớt
                      gánh nặng khi bắt đầu cuộc hành trình mới.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-slate-200 border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full bg-avt  border border-gray-200">
                      <img src={m2} alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold review-content__name uppercase text-gray-600">
                        Đinh Hoàng Hải
                      </h6>
                      <p className="review-content__info">
                        Kỹ sư Công nghệ thông tin
                      </p>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Tôi đã có trải nghiệm tìm kiếm công việc tuyệt vời nhờ vào
                      sự hỗ trợ chuyên nghiệp của trung tâm. Họ không chỉ giúp
                      tôi đăng ký các khóa học đào tạo nhanh mà còn hỗ trợ về
                      visa và tìm kiếm chỗ ở. Mọi thứ đều được tổ chức rất tốt.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-slate-200 border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full bg-avt border border-gray-200">
                      <img src={wm3} alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold review-content__name uppercase text-gray-600">
                        Đoàn Kiều Chi
                      </h6>
                      <p className="review-content__info">Du học sinh Úc</p>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Trung tâm này cung cấp các thông tin chi tiết và rõ ràng
                      về các chương trình du học tại Úc. Sự minh bạch giúp tôi
                      hiểu rõ về những gì đang chờ đợi và chuẩn bị tốt cho những
                      thách thức và quá trình học tập sau này.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full  bg-avt  border border-gray-200">
                      <img src={wm4} alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold review-content__name  uppercase text-gray-600">
                        Nguyễn Thị Thi
                      </h6>
                      <p className="review-content__info">
                        Du học sinh Hàn, kỳ tháng 9 năm 2023
                      </p>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Tôi được khuyến khích và hỗ trợ đầy đủ trong quá trình học
                      tập. Các buổi tư vấn về sự nghiệp và các hoạt động ngoại
                      khóa là những trải nghiệm thêm vào giáo dục chính, giúp
                      tôi xây dựng một tương lai đầy tiềm năng.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
