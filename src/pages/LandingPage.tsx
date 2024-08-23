import { AboutUs } from "../components/About us/AboutUs";
import { WhyUs } from "../components/WhyUs/WhyUs";
import { FAQs } from "../components/FAQs/FAQs";
import Header from "../components/Header/Header";
import { Home } from "../components/Home/Home";
import { Services } from "../components/Services/Services";
import { ScrollToTop } from "../components/Shared/ScrollToTop";
import ContactUs from "../components/Contact Us/ContactUs";
import Footer from "../components/Footer/Footer";

const sections = [
  { id: "home", component: <Home /> },
  { id: "why-us", component: <WhyUs /> },
  { id: "services", component: <Services /> },
  { id: "about-us", component: <AboutUs /> },
  { id: "faqs", component: <FAQs /> },
];

const LandingPage = () => {
  return (
    <>
      <Header />
      {/* Main Section */}
      {sections.map((section) => (
        <div key={section.id}>
          <>{section.component}</>
        </div>
      ))}
      <ContactUs />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default LandingPage;
