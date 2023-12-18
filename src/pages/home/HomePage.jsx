import React from "react";
import Header from "./../../commons/components/header/Header";
import Contact from "./../../commons/components/contact/Contact";

const HomePage = () => {
  return (
    <div className="home-wrap w-full">
      <div className="fixed w-full top-0 left-0 z-[9999]">
        <Header />
      </div>
      {/* <Banner />
      <About />
      <Order />
      <CompanyInfo />
      <CompanyResult />
      <BusinessLicense />
      <CustomerReview />
      <ContactForm />
      <Footer /> */}
      <Contact />
    </div>
  );
};

export default HomePage;
