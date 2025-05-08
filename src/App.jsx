import CompaniesLogo from "./components/CompaniesLogo";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";
import Trial from "./components/Trial";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CompaniesLogo />
      <Service />
      <Testimonial />
      <Pricing />
      <Faq />
      <Trial />
      <Footer />
    </>
  );
}

export default App;
