import "./App.css";
import Header from "./commons/components/header/Header";
import Banner from "./commons/components/banner/Banner";
import About from "./commons/components/about/About";
import Order from "./commons/components/order/Order";
import BusinessLicense from "./commons/components/business-license/BusinessLicense";
import CompanyInfo from "./commons/components/company-info/CompanyInfo";
import CompanyResult from "./commons/components/company-result/CompanyResult";
import CustomerReview from "./commons/components/customer-review/CustomerReview";
import Footer from "./commons/components/footer/Footer";
import Contact from "./commons/components/contact/Contact";

function App() {
  return (
    <>
      <div className="fixed w-full top-0 left-0 z-[9999]">
        <Header />
      </div>
      <Banner />
      <About />
      <Order />
      <CompanyInfo />
      <CompanyResult />
      {/* <BusinessLicense /> */}
      <CustomerReview />
      {/* <Footer /> */}
      {/* <div className="fixed left-0   bottom-0 2xl:bottom-20 z-[9999]">
        <Contact />
      </div> */}
    </>
  );
}

export default App;
