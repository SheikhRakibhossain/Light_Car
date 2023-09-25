import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./testimonials.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <>
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
        className="overlay sm:my-20 z-0 mySwiper w-screen min-h-[40vh] mt-20"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/front-view-woman-working-car-service_23-2148826534.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=ais)", 
        }}
      >
        <h2>Lorem ipsum dolor sit amet.</h2>
        {/* slider per view */}
        <SwiperSlide className="z-10">
          <div className="container mx-auto px-5">
            <div className=" sm:px-5 md:px-20 sm:py-10 py-5 flex flex-col flex-grow-1 justify-center items-center space-y-4">
             
                  <img src="https://img.freepik.com/free-photo/portrait-beautiful-face-young-woman-with-long-brown-hair_186202-4331.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=sph" />
                

              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                laboriosam, aspernatur culpa voluptas iste ipsam fuga sed atque?
                Minima, eligendi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, laudantium.
              </p>
              <p className="text-white font-[300px]" style={{fontSize:"30px"}}>
                <FaQuoteLeft />
              </p>
              <h2 className="text-[#f22613] text-xl">Rakib Khan</h2>
              <h2 className="text-white text-[12px] font-semibold">Next.js Devleoper</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="z-10">
          <div className="container mx-auto px-5">
            <div className=" sm:px-5 md:px-20 sm:py-10 py-5 flex flex-col flex-grow-1 justify-center items-center space-y-4">
             
                  <img src="https://img.freepik.com/free-photo/portrait-beautiful-face-young-woman-with-long-brown-hair_186202-4331.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=sph" />
                

              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                laboriosam, aspernatur culpa voluptas iste ipsam fuga sed atque?
                Minima, eligendi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, laudantium.
              </p>
              <p className="text-white font-[300px]" style={{fontSize:"30px"}}>
                <FaQuoteLeft />
              </p>
              <h2 className="text-[#f22613] text-xl">Rakib Khan</h2>
              <h2 className="text-white text-[12px] font-semibold">Next.js Devleoper</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="z-10">
          <div className="container mx-auto px-5">
            <div className=" sm:px-5 md:px-20 sm:py-10 py-5 flex flex-col flex-grow-1 justify-center items-center space-y-4">
             
                  <img src="https://img.freepik.com/free-photo/portrait-beautiful-face-young-woman-with-long-brown-hair_186202-4331.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=sph" />
                

              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                laboriosam, aspernatur culpa voluptas iste ipsam fuga sed atque?
                Minima, eligendi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, laudantium.
              </p>
              <p className="text-white font-[300px]" style={{fontSize:"30px"}}>
                <FaQuoteLeft />
              </p>
              <h2 className="text-[#f22613] text-xl">Rakib Khan</h2>
              <h2 className="text-white text-[12px] font-semibold">Next.js Devleoper</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="z-10">
          <div className="container mx-auto px-5">
            <div className=" sm:px-5 md:px-20 sm:py-10 py-5 flex flex-col flex-grow-1 justify-center items-center space-y-4">
             
                  <img src="https://img.freepik.com/free-photo/portrait-beautiful-face-young-woman-with-long-brown-hair_186202-4331.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=sph" />
                

              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                laboriosam, aspernatur culpa voluptas iste ipsam fuga sed atque?
                Minima, eligendi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, laudantium.
              </p>
              <p className="text-white font-[300px]" style={{fontSize:"30px"}}>
                <FaQuoteLeft />
              </p>
              <h2 className="text-[#f22613] text-xl">Rakib Khan</h2>
              <h2 className="text-white text-[12px] font-semibold">Next.js Devleoper</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Testimonials;
