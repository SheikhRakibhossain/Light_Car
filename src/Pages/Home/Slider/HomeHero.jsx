import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./HomeHero.css";
//slider image
import img1 from "../../../assets/images/slider/1.jpg";

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
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                      Provident cupiditate voluptatem et in. Quaerat fugiat ut
                      assumenda excepturi exercitationem quasi. In deleniti
                      eaque aut repudiandae et a id nisi.
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
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                      Provident cupiditate voluptatem et in. Quaerat fugiat ut
                      assumenda excepturi exercitationem quasi. In deleniti
                      eaque aut repudiandae et a id nisi.
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
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                      Provident cupiditate voluptatem et in. Quaerat fugiat ut
                      assumenda excepturi exercitationem quasi. In deleniti
                      eaque aut repudiandae et a id nisi.
                    </p>
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
