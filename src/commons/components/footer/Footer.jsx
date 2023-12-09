import React, { useCallback, useState } from "react";
import "./footer.css";
import logo from "../../assets/Logo_BCN.png";
import fb from "../../assets/facebook.png";
import tt from "../../assets/tik-tok.png";
import { Button, Form, Input, message } from "antd";
import emailjs from "emailjs-com";

const Footer = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Thành công",
      className: "custom-class",
      style: {
        marginTop: "20vh",
      },
    });
  };
  const loading = () => {
    messageApi.open({
      type: "loading",
      content: "Đang thực hiện",
      className: "custom-class",
      style: {
        marginTop: "20vh",
      },
    });
  };
  const onFinish = useCallback(
    async (values) => {
      try {
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
        console.log(error);
      }
    },
    [form]
  );
  return (
    <>
      <footer className="new_footer_area bg_color" id="footer">
        <div className="new_footer_top">
          <footer class="px-3 lg:px-5 border-t-2 bg-gray-50">
            <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 w-full">
              <div class="sm:col-span-2">
                <a href="#" class="inline-flex items-center">
                  <img
                    src={logo}
                    alt="logo"
                    class="h-20 w-20"
                    className="logo-contact"
                  />
                  <span class="ml-2 text-2xl font-bold tracking-wide text-gray-800 text-center">
                    CÔNG TY CỔ PHẦN CUNG ỨNG NHÂN LỰC <br />{" "}
                    <strong className="text-3xl">BCN QUỐC TẾ</strong>
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

              <div class="flex flex-col gap-2 mt-5 program-list">
                <h2 class="!text-xl font-bold tracking-wide text-gray-900">
                  CHƯƠNG TRÌNH ĐÀO TẠO
                </h2>
                <p className="text-hover">Đào Tạo Tiếng Nhật</p>
                <p className="text-hover">Đào Tạo Tiếng Hàn</p>
                <p className="text-hover">Đào Tạo Tiếng Đức</p>
                <p className="text-hover">Đào Tạo Tiếng Đài Loan</p>
              </div>

              <div className="mt-5 contact-link">
                <p class="!text-xl font-bold tracking-wide text-gray-900">
                  LIÊN HỆ VỚI CHÚNG TÔI
                </p>
                <div class="flex items-center px-2 mt-3">
                  <a
                    href="https://www.facebook.com/duhocjtrain68"
                    class="w-full min-w-xl !ml-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={fb} alt="Playstore Button" class="w-12" />
                  </a>
                  <a
                    class="w-full min-w-xl !-ml-16"
                    href="http://www.tiktok.com/@duhoc.jtrain"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={tt} alt="Button" class="w-12" />
                  </a>
                </div>
                {/* <div class="flex flex-col items-center justify-center">
                  <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
                    <h2 class="text-xl font-bold text-gray-200 mb-4">
                      Để lại thông tin để chúng tôi tư vấn với bạn
                    </h2>

                    <form class="flex flex-col">
                      <input
                        placeholder="Nhập tên của bạn"
                        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <input
                        placeholder="Nhập số điện thoại/ email"
                        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                        type="text"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                      />

                      <button
                        class="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-green-600 hover:to-blue-600 transition ease-in-out duration-150"
                        // type="submit"
                        onClick={sendMail}
                      >
                        Gửi
                      </button>
                    </form>
                  </div>
                </div> */}
                <div className="text-xl text-center mb-2 font-semibold">
                  <h3>Hãy để lại thông tin để chúng tôi tư vấn cho bạn</h3>
                </div>
                <Form
                  form={form}
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  style={{
                    maxWidth: 600,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  autoComplete="off"
                  className="p-2 pt-6 bg-slate-200 rounded-lg"
                >
                  <Form.Item
                    label="Họ & Tên"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập tên của bạn!",
                      },
                    ]}
                    className=" "
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Sđt/Email"
                    name="contact"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập SĐT hoặc Email",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    {contextHolder}
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="bg-sky-500"
                    >
                      Gửi
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </footer>
          <div className="footer_bg ">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
