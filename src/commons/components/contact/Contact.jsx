import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-wrap" id="">
      {/* <div class="ring">
        <div class="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
          <div class="coccoc-alo-ph-circle"></div>
          <div class="coccoc-alo-ph-circle-fill"></div>
          <div class="coccoc-alo-ph-img-circle"></div>
        </div>
      </div> */}
      <div className="phone flex flex-row items-center justify-center">
        <a href="tel:+8497 626 5599" className="inline">
          <div class="coccoc-alo-ph-img-circle"></div>
        </a>
        <p className="px-4 py-2 font-semibold rounded-xl -ml-2 -mb-1 2xl:text-3xl">
          097 626 5599
        </p>
      </div>
    </div>
  );
};

export default Contact;
