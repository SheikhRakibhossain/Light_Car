
import Service from "../../Service/Service";
import AboutUs from "../AboutUs";
import CompletedTask from "../CompletedTask";
import HomeHero from "../HomeHero";
import Pricing from "../Pricing/Pricing";
import WhyChooesUs from "../WhyChooesUs";

const Home = () => {
  return (
    <>
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
