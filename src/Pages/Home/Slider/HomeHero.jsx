import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./HomeHero.css";
//slider image
// import img1 from "../../../assets/images/slider/1.jpg";

const HomeHero = () => {
  return (
    <>
      <section>
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        
        >
          <SwiperSlide>
            
              <div
                className="hero min-h-screen"
                style={{
                  backgroundImage:
                    "url(https://img.freepik.com/free-photo/young-woman-female-mechanic-checking-chassis-workshop_7502-4431.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=ais)",
                }}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-[650px] space-y-5">
                    <h1 className="mb-5 text-5xl font-bold text-white z-10 uppercase">Expert Car Repairs</h1>
                    <p className="mb-5">
                    Trust our skilled technicians to diagnose and fix your vehicle{"'"}s issues with precision and care. We{"'"}re your reliable partner on the road to worry-free driving.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
            
          </SwiperSlide>
          <SwiperSlide>
            
              <div
                className="hero min-h-screen"
                style={{
                  backgroundImage:
                    "url(https://img.freepik.com/free-photo/mechanic-servicing-car-engine_1170-1173.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=ais)",
                }}
              >
                <div className="hero-overlay bg-opacity-75"></div>
                <div className="hero-content text-center text-white ">
                  <div className="max-w-[650px] space-y-5">
                    <h1 className="mb-5 text-5xl font-bold text-white z-10 uppercase">Quality Parts & Service</h1>
                    <p className="mb-5">
                    We use only top-quality parts and provide exceptional service to ensure your car runs smoothly and safely. Your satisfaction is our priority
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
            
          </SwiperSlide>
          <SwiperSlide>
            
              <div
                className="hero min-h-screen"
                style={{
                  backgroundImage:
                    "url(https://img.freepik.com/free-photo/benchman-fixing-engine-car_114579-2807.jpg?size=626&ext=jpg&ga=GA1.2.28436747.1695030037&semt=ais)",
                }}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-[650px] space-y-5">
                    <h1 className="mb-5 text-5xl font-bold text-white z-10 uppercase">Affordable Pricing</h1>
                    <p className="mb-5">
                    Get the repairs you need without breaking the bank. Our competitive pricing ensures you receive value for every dollar spent on your vehicle
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
            
          </SwiperSlide>
          <SwiperSlide>
            
              <div
                className="hero min-h-screen"
                style={{
                  backgroundImage:
                    "url(https://img.freepik.com/free-photo/mechanic-standing-repair-shop-showing-thumbs-up_1170-1375.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=ais)",
                }}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-[650px] space-y-5">
                    <h1 className="mb-5 text-5xl font-bold text-white z-10 uppercase">Customer Satisfaction</h1>
                    <p className="mb-5">
                    Join our satisfied customers who{"'"}ve experienced hassle-free repairs and maintenance. Your car deserves the best, and so do you                    </p>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
            
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default HomeHero;
