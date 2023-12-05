import React from "react";
import "./customer-review.css";

const CustomerReview = () => {
  return (
    <div classNameName="review-wrap">
      <div className="min-w-screen min-h-screen  flex items-center justify-center py-5">
        <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center w-full mx-auto">
              <h1 className="text-comp">KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI</h1>
              <h3 className="text-base mb-5 font-light">
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
            <div className="-mx-3 md:flex items-start">
              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-slate-200 border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-slate-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=1" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Trần Thị Nga
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Trung tâm du học này là lựa chọn xuất sắc! Hỗ trợ tận tâm
                      từ đội ngũ tư vấn, giúp tôi tự tin hơn về quyết định du
                      học. Giáo viên chất lượng, và môi trường học quốc tế làm
                      cho trải nghiệm học tập của tôi trở nên đặc biệt.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=2" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Nguyễn Thị Vân Anh
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Trung tâm xuất khẩu lao động này đã giúp tôi có cơ hội làm
                      việc ở nước ngoài một cách thuận lợi. Quy trình tư vấn và
                      thủ tục được thực hiện chuyên nghiệp, giúp tôi tự tin hơn
                      khi bắt đầu công việc mới ở đất khách.
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
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=3" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Nguyễn Văn An
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Dịch vụ của trung tâm xuất khẩu lao động và du học sinh
                      rất đáng tin cậy. Tôi đã được hỗ trợ mọi thứ từ việc chuẩn
                      bị hồ sơ đến khi tìm kiếm chỗ ở tại quốc gia mới. Điều này
                      thực sự giảm bớt gánh nặng khi bắt đầu cuộc hành trình
                      mới.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-slate-200 border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=4" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Đinh Hoàng Hải
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Tôi đã có trải nghiệm du học tuyệt vời nhờ vào sự hỗ trợ
                      chuyên nghiệp của trung tâm. Họ không chỉ giúp tôi đăng ký
                      các khóa học mà còn hỗ trợ về visa và tìm kiếm chỗ ở. Mọi
                      thứ đều được tổ chức rất tốt.
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
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=5" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Đoàn Kiều Chi
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Trung tâm này cung cấp các thông tin chi tiết và rõ ràng
                      về các chương trình xuất khẩu lao động và du học. Sự minh
                      bạch giúp tôi hiểu rõ về những gì đang chờ đợi và chuẩn bị
                      tốt cho những thách thức.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=6" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Nguyễn Thị Thi
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
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
