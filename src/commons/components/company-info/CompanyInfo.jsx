import React from "react";
import "./company_info.css";
import CT from "../../images/IMG_6744.JPG";
import info from "../../images/info2.jpg";

const CompanyInfo = () => {
  return (
    <div className="info-wrap" id="info">
      <div className="info-wrap-child">
        <h1 className="info-wrap__title">VỀ CHÚNG TÔI</h1>
        <ul className="timeline-ul">
          <li>
            <div class="date color-title1">TẦM NHÌN</div>
            {/* <div class="title">Title 1</div> */}
            <div class="descr">
              BCN-HR trở thành công ty hàng đầu trong lĩnh vực cung cấp nguồn
              nhân lực; hoạt động hiệu quả và phát triển bền vững; là sự lựa
              chọn của các đối tác trong và ngoài nước.
            </div>
          </li>
          <li>
            <div className="date color-title2">SỨ MỆNH</div>
            {/* <div className="title">Title 2</div> */}
            <div className="descr">
              Cung cấp cho khách hàng các sản phẩm, dịch vụ có chất lượng phù
              hợp, giá cả cạnh tranh. Hài hòa lợi ích doanh nghiệp với lợi ích
              xã hội, đóng góp tích cực vào các hoạt động hướng tới cộng đồng.
            </div>
          </li>
          <li>
            <div className="date color-title3">PHƯƠNG CHÂM</div>
            {/* <div className="title">Title 3</div> */}
            <div className="descr">
              Thẳng thắn – Trung thực – Tận tâm phục vụ khách hàng – Lấy uy tín
              làm kim chỉ nam hành động.
            </div>
          </li>
          <li>
            <div className="date color-title4">THẾ MẠNH</div>
            {/* <div className="title">Title 3</div> */}
            <div className="descr">
              BCN HR có Ban lãnh đạo và đội ngũ nhân viên kinh nghiệm, am hiểu
              thị trường nước ngoài. Là một trong những doanh nghiệp luôn đi đầu
              trong việc chú trọng xây dựng cơ sở vật chất khang trang, hiện đại
              và thân thiện với môi trường. Có đội ngũ giảng viên trình độ cao,
              cùng quy trình giảng dạy luôn được đảm bảo chất lượng và không
              ngừng nâng cao…
            </div>
          </li>
          <li>
            <div className="date color-title5">CƠ HỘI ĐẦU TƯ</div>
            {/* <div className="title">Title 3</div> */}
            <div className="descr">
              BCN HR luôn liên tục tuyển chọn nguồn lao động mới, đào tạo ngoại
              ngữ, tay nghề và chuyên môn cũng như các kiến thức văn hoá cần
              thiết để phù hợp với yêu cầu của các nhà tuyển dụng. Bên cạnh đó,
              chúng tôi luôn có các giải pháp đầu tư hiệu quả nhất không chỉ là
              tận dụng lợi thế về sự cần cù của người lao động Việt Nam, sự gần
              gũi với các doanh nghiệp Nhật Bản mà còn xây dựng tốt mối quan hệ
              mật thiết với các loại hình doanh nghiệp tại Việt Nam.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CompanyInfo;
