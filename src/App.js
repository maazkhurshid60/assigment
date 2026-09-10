import Header from "./components/Header";
import MarqueeSection from "./components/MarqueeSection";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import CustomTech from "./components/CustomTech";
import FAQs from "./components/FAQs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Explore from "./components/Explore";
import HeroSec from "./components/HeroSec";
import WhyChooseUs from "./components/whyChooseUs/WhyChooseUs";
import CaseStudies from "./components/caseStudies/CaseStudies";
import ToastHost from "./components/ui/ToastHost";

function App() {

  return (
    <>
      <Header />

      <HeroSec />
      <MarqueeSection />
      <Services />
      <Explore />
      <WhyChooseUs />
      <CaseStudies />
      <AboutUs/>
      <CustomTech/>
      <FAQs/>
      <ContactUs/>


    <Footer />

    <ToastHost />

    </>
  );
}

export default App;
