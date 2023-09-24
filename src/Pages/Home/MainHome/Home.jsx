
import Service from "../../Service/Service";
import AboutUs from "../AboutUs";
import CompletedTask from "../CompletedTask";
import GetService from "../GetService/GetService";
import HomeHero from "../HomeHero";
import Pricing from "../Pricing/Pricing";
import WhyChooesUs from "../WhyChooesUs";

const Home = () => {
  return (
    <>
    <GetService/>
    <HomeHero/>
    <AboutUs/>
    <WhyChooesUs/>
    <CompletedTask/>
    <Pricing/>
    <Service/>
    </>
  );
};

export default Home;
