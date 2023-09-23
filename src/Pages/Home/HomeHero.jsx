import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import { Navigation, Autoplay, Pagination, History } from "swiper/modules";
import img1 from "../../assets/images/homeCarousel/1.jpg";
import img2 from "../../assets/images/homeCarousel/2.jpg";
import img3 from "../../assets/images/homeCarousel/3.jpg";
import img4 from "../../assets/images/homeCarousel/4.jpg";

const HomeHero = () => {
  return (
    <>
    {/* hello  */}
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          pagination={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          history={{
            key: "slide",
          }}
          modules={[Navigation, Autoplay, Pagination, History]}
          className="mySwiper"
        >
          <SwiperSlide data-history="1">
            <div className="relative">
              {/* Image */}
              <img
                className="object-cover"
                src={img1}
                alt="Background Image"
              />

              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="w-4/6 text-white space-y-4">
                  {/* Your content goes here */}
                  <h1 className="text-4xl font-bold">Car Maker Best Here !</h1>
                  <p className="text-lg">we are a dumble and extra solution for any car</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quaerat pariatur laudantium error dolorem sequi id earum in sapiente corporis!</p>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                    Check In
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide data-history="1">
            <div className="relative">
              {/* Image */}
              <img
                className="object-cover"
                src={img2}
                alt="Background Image"
              />

              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="w-4/6 text-white space-y-4">
                  {/* Your content goes here */}
                  <h1 className="text-4xl font-bold">Car Maker Best Here !</h1>
                  <p className="text-lg">we are a dumble and extra solution for any car</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quaerat pariatur laudantium error dolorem sequi id earum in sapiente corporis!</p>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                    Check In
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide data-history="1">
            <div className="relative">
              {/* Image */}
              <img
                className="object-cover"
                src={img3}
                alt="Background Image"
              />

              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="w-4/6 text-white space-y-4">
                  {/* Your content goes here */}
                  <h1 className="text-4xl font-bold">Car Maker Best Here !</h1>
                  <p className="text-lg">we are a dumble and extra solution for any car</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quaerat pariatur laudantium error dolorem sequi id earum in sapiente corporis!</p>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                    Check In
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide data-history="1">
            <div className="relative">
              {/* Image */}
              <img
                className="object-cover"
                src={img4}
                alt="Background Image"
              />

              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="w-4/6 text-white space-y-4">
                  {/* Your content goes here */}
                  <h1 className="text-4xl font-bold">Car Maker Best Here !</h1>
                  <p className="text-lg">we are a dumble and extra solution for any car</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quaerat pariatur laudantium error dolorem sequi id earum in sapiente corporis!</p>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                    Check In
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          
        </Swiper>
      </div>
    </>
  );
};

export default HomeHero;
