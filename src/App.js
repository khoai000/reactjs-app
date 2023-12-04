import "./App.css";
import Header from "./commons/components/header/Header";
import Banner from "./commons/components/banner/Banner";
import About from "./commons/components/about/About";
import Order from "./commons/components/order/Order";
import BusinessLicense from "./commons/components/business-license/BusinessLicense";
import CompanyInfo from "./commons/components/company-info/CompanyInfo";
import CompanyResult from "./commons/components/company-result/CompanyResult";
import CustomerReview from "./commons/components/customer-review/CustomerReview";

function App() {
  return (
    <div className="scroll-smooth">
      {/* <Banner /> */}
      {/* <About /> */}
      {/* <Order /> */}
      {/* <BusinessLicense /> */}
      {/* <CompanyInfo /> */}
      {/* <CompanyResult /> */}
      <CustomerReview />
    </div>
  );
}

export default App;
