import About from "./component/About";
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
      <Footer5/>
    </div>
  );
};

export default pages;
