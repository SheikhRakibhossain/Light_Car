
import NewsLetter from "./NewsLetter";
import Team from "./Team";
import WorkShopInfo from "./WorkShopInfo";

const About = () => {
  // const carURL =
  //   "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
  return (
    <>
  
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">Let{"'"}s Know About Us</h1>
            <p className="mb-5">
            At this car services center, we{"'"}re more than just a car repair shop; we{"'"}re your trusted partner in keeping your vehicle running smoothly. With a rich legacy of serving Dhaka city for over 20 years, we{"'"}ve earned a reputation for excellence in automotive repair and maintenance.
            </p>
            <button className="btn btn-primary">Book Now A Service</button>
          </div>
        </div>
      </div>
      {/* our company works shop info */}
      <WorkShopInfo/>
      {/* our team member components */}
      <Team/>
      <NewsLetter/>
     
    </>
  );
};

export default About;
