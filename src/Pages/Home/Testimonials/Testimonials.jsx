import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import './testimonials.css';


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
        className="z-0 mySwiper w-screen min-h-[40vh] border border-red-600 bg-no-repeat bg-cover"
        style={{backgroundImage:"url(https://img.freepik.com/free-photo/front-view-woman-working-car-service_23-2148826534.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=ais)"}}
      >
        {/* slider per view */}
        <SwiperSlide className="z-10">Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>




      </Swiper>
            
        </>
    );
};

export default Testimonials;