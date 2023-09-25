
import Service from "../../Service/Service";
import AboutUs from "../AboutUs";
import CompletedTask from "../CompletedTask";
import GetService from "../GetService/GetService";
import Location from "../Location/Location";
import Pricing from "../Pricing/Pricing";
import HomeHero from "../Slider/HomeHero";
import Testimonials from "../Testimonials/Testimonials";
import WhyChooesUs from "../WhyChooesUs";
import BackToUp from '@uiw/react-back-to-top';


const Home = () => {
  return (
    <>
    <HomeHero/>
    <AboutUs/>
    <WhyChooesUs/>
    <CompletedTask/>
    <Pricing/>
    <Service/>
    <GetService/>
    <Testimonials/>
    <Location/>
    <BackToUp className="text-white font-bold text-2xl">Top</BackToUp>
    </>
  );
};

export default Home;
