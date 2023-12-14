import React from "react";
import "./contact-form.css";
import { Form, Input } from "antd";
import gmail from "../../assets/gmail.png";
import phone from "../../assets/phone-reng.png";
import mess from "../../assets/messenger.png";

const { TextArea } = Input;

const ContactForm = () => {
  const [form] = Form.useForm();
  return (
    <div className="contact-form" id="contact">
      <div className="contact-title">LIÊN HỆ TƯ VẤN</div>
      <div className="content-group">
        <div className="content-group__left">
          <a href="mailto:bcnhr.vn@gmail.com">
            <div className="link-box">
              <img src={gmail} alt="" className="link-box__icon" />
              <p className="link-box__text">Gửi mail</p>
            </div>
          </a>
          <a href="tel:0976265599">
            <div className="link-box">
              <img src={phone} alt="" className="link-box__icon" />
              <p className="link-box__text">Gọi điện</p>
            </div>
          </a>
          <a href="tel:0976265599">
            <div className="link-box">
              <img src={mess} alt="" className="link-box__icon" />
              <p className="link-box__text">Nhắn tin</p>
            </div>
          </a>
        </div>
        <div className="content-group__right">
          <Form
            name="trigger"
            style={{
              maxWidth: 1200,
            }}
            form={form}
            layout="vertical"
            autoComplete="off"
          >
            <Form.Item
              hasFeedback
              label={<p className="label-item">Họ & Tên</p>}
              name="name"
              validateTrigger="onBlur"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
              className="input-style"
            >
              <Input placeholder="Bắt buộc" className="input-item" />
            </Form.Item>
            <Form.Item
              hasFeedback
              label={<p className="label-item">SĐT/ Email</p>}
              name="contact"
              validateTrigger="onBlur"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
              className="input-style"
            >
              <Input placeholder="Bắt buộc" className="input-item" />
            </Form.Item>
            <Form.Item
              hasFeedback
              label={<p className="label-item">Nội dung</p>}
              name="content"
              validateTrigger="onBlur"
              className="input-style"
            >
              <TextArea rows={3} className="input-item" />
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
