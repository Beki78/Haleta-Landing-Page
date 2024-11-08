import About from "./component/About";
import Accordion from "./component/Accordion";
import Contact from "./component/Contact";
import Footer5 from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Services from "./component/Services";
import Solutions from "./component/Solutions";
import Team from "./component/Team";

const pages = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Services/>
      <Solutions/>
      <Team/>
      <Accordion/>
      <Contact/>
      <Footer5/>
    </div>
  );
};

export default pages;
