import Clients from "./Clients";
import HeroSection from "./HeroSection";
// import Logo from "../assets/images/banner-logo-transparent.ce5bc3f3.png";
import HeroTitle from "./HeroTitle";
import Services from "./Services";
import Workflow from "./Workflow";

const Home = () => {
  return (
    <div className="">
      <HeroSection />

      <HeroTitle />

      <Services />

      <Workflow />

      <Clients />
    </div>
  );
};

export default Home;
