import { AboutUs } from "../About us/AboutUs";
import { FAQs } from "../FAQs/FAQs";
import { Home } from "../Home/Home";
import { Services } from "../Services/Services";
import { WhyUs } from "../WhyUs/WhyUs";

export const sections = [
  { id: "home", label: "Home", component: Home },
  { id: "why-us", label: "Why Us", component: WhyUs },
  { id: "services", label: "Services", component: Services },
  { id: "about-us", label: "About Us", component: AboutUs },
  { id: "faqs", label: "FAQs", component: FAQs },
];
