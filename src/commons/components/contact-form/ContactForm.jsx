import React, { useCallback } from "react";
import "./contact-form.css";
import { Form, Input, message } from "antd";
import gmail from "../../assets/gmail.png";
import phone from "../../assets/phone-reng.png";
import mess from "../../assets/messenger.png";
import emailjs from "emailjs-com";

const { TextArea } = Input;

const ContactForm = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const success = useCallback(() => {
    messageApi.open({
      type: "success",
      content: "Thành công",
      className: "custom-class",
      style: {
        marginTop: "20vh",
      },
    });
  }, [messageApi]);
  const loading = useCallback(() => {
    messageApi.open({
      type: "loading",
      content: "Đang thực hiện",
      className: "custom-class",
      style: {
        marginTop: "20vh",
      },
    });
  }, [messageApi]);
  const warning = useCallback(() => {
    messageApi.open({
      type: "warning",
      content: "Vui lòng điền dữ liệu",
      className: "custom-class",
      style: {
        marginTop: "20vh",
      },
    });
  }, [messageApi]);
  const onFinish = useCallback(async () => {
    try {
      const values = await form.validateFields();
      console.log(values);
      loading();
      const result = await emailjs.send(
        "service_xcauajq",
        "template_gyir19j",
        values,
        "GHADjin2iHQ-vi5Jy"
      );
      message.destroy();
      if (result) {
        success();
        form.resetFields();
      } else {
        message.error("Failed!");
      }
    } catch (error) {
      warning();
      console.log(error);
    }
  }, [form, loading, success, warning]);
  return (
    <div className="contact-form" id="contact">
      <div className="contact-title">LIÊN HỆ TƯ VẤN</div>
      <div className="content-group">
        <div className="content-group__left">
          <a onClick={() => window.open("mailto:bcnhr.vn@gmail.com")}>
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
            {contextHolder}
            <div onClick={onFinish}>
              <button class="btn">
                <i class="animation"></i>Gửi<i class="animation"></i>
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
