import React from "react";
import "./contact-form.css";
import { Alert, Form, Input } from "antd";

const ContactForm = () => {
  const [form] = Form.useForm();
  return (
    <div className="contact-form" id="contact">
      <div className="contact-title">LIÊN HỆ TƯ VẤN</div>
      <Form
        name="trigger"
        style={{
          maxWidth: 600,
        }}
        form={form}
        layout="vertical"
        autoComplete="off"
      >
        {/* <Alert message="Use 'max' rule, continue type chars to see it" /> */}

        <Form.Item
          hasFeedback
          label="Họ & Tên"
          name="name"
          validateTrigger="onBlur"
          rules={[
            {
              required: true,
              message: "Vui lòng điền đầy đủ thông tin",
            },
          ]}
        >
          <Input placeholder="" />
        </Form.Item>

        <Form.Item
          hasFeedback
          label="Field B"
          name="field_b"
          validateDebounce={1000}
          rules={[
            {
              max: 3,
            },
          ]}
        >
          <Input placeholder="Validate required debounce after 1s" />
        </Form.Item>

        <Form.Item
          hasFeedback
          label="Field C"
          name="field_c"
          validateFirst
          rules={[
            {
              max: 6,
            },
            {
              max: 3,
              message: "Continue input to exceed 6 chars",
            },
          ]}
        >
          <Input placeholder="Validate one by one" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactForm;
