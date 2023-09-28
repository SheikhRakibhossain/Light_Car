import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./testimonials.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <>
      <div
        className="hero min-h-screen items-center justify-center content-center"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/front-view-woman-working-car-service_23-2148826534.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=ais)",
        }}
      >
        
        <div className="hero-overlay bg-black bg-opacity-60">
        <div className="hero-content text-center text-neutral-content">
          {/*title  */}
          
          <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className=" mySwiper "
        >
          {/* slider per view */}
          <SwiperSlide>
            <div className="container mx-auto px-5">
              <div className=" sm:px-5 md:px-20 sm:py-10 py-5 flex flex-col flex-grow-1 justify-center items-center space-y-4">
                <img
                  className="img"
                  src="https://img.freepik.com/free-photo/portrait-beautiful-face-young-woman-with-long-brown-hair_186202-4331.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=sph"
                />

                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  laboriosam, aspernatur culpa voluptas iste ipsam fuga sed
                  atque? Minima, eligendi. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Earum, laudantium.
                </p>
                <p
                  className="text-white font-[300px]"
                  style={{ fontSize: "30px" }}
                >
                  <FaQuoteLeft />
                </p>
                <h2 className="text-[#f22613] text-xl">Rakib Khan</h2>
                <h2 className="text-white text-[12px] font-semibold">
                  Next.js Devleoper
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="z-10">
            <div className="container mx-auto px-5">
              <div className=" sm:px-5 md:px-20 sm:py-10 py-5 flex flex-col flex-grow-1 justify-center items-center space-y-4">
                <img
                  className="img"
                  src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=sph"
                />

                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  laboriosam, aspernatur culpa voluptas iste ipsam fuga sed
                  atque? Minima, eligendi. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Earum, laudantium.
                </p>
                <p
                  className="text-white font-[300px]"
                  style={{ fontSize: "30px" }}
                >
                  <FaQuoteLeft />
                </p>
                <h2 className="text-[#f22613] text-xl">Rakib Khan</h2>
                <h2 className="text-white text-[12px] font-semibold">
                  Next.js Devleoper
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="z-10">
            <div className="container mx-auto px-5">
              <div className=" sm:px-5 md:px-20 sm:py-10 py-5 flex flex-col flex-grow-1 justify-center items-center space-y-4">
                <img
                  className="img"
                  src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=sph"
                />

                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  laboriosam, aspernatur culpa voluptas iste ipsam fuga sed
                  atque? Minima, eligendi. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Earum, laudantium.
                </p>
                <p
                  className="text-white font-[300px]"
                  style={{ fontSize: "30px" }}
                >
                  <FaQuoteLeft />
                </p>
                <h2 className="text-[#f22613] text-xl">Rakib Khan</h2>
                <h2 className="text-white text-[12px] font-semibold">
                  Next.js Devleoper
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="z-10">
            <div className="container mx-auto px-5">
              <div className=" sm:px-5 md:px-20 sm:py-10 py-5 flex flex-col flex-grow-1 justify-center items-center space-y-4">
                <img
                  className="img"
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=sph"
                />

                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  laboriosam, aspernatur culpa voluptas iste ipsam fuga sed
                  atque? Minima, eligendi. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Earum, laudantium.
                </p>
                <p
                  className="text-white font-[300px]"
                  style={{ fontSize: "30px" }}
                >
                  <FaQuoteLeft />
                </p>
                <h2 className="text-[#f22613] text-xl">Rakib Khan</h2>
                <h2 className="text-white text-[12px] font-semibold">
                  Next.js Devleoper
                </h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        </div>
      </div>
      </div>
      {/* <section>
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
                <div className="hero-overlay bg-black bg-opacity-50"></div>
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
                <div className="hero-overlay bg-black bg-opacity-50"></div>
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
                <div className="hero-overlay bg-black bg-opacity-60"></div>
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
                <div className="hero-overlay bg-black bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-[650px] space-y-5">
                    <img src="" alt="" className="" />
                    <h1 className="mb-5 text-5xl font-bold text-white z-10 uppercase">Customer Satisfaction</h1>
                    <p className="mb-5">
                    Join our satisfied customers who{"'"}ve experienced hassle-free repairs and maintenance. Your car deserves the best, and so do you                    </p>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
            
          </SwiperSlide>
        </Swiper>
      </section> */}
    
    </>
  );
};

export default Testimonials;
