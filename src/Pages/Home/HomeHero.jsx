import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import { Navigation, Pagination, History } from 'swiper/modules';
import img1 from '../../assets/images/homeCarousel/1.jpg';
import img2 from '../../assets/images/homeCarousel/2.jpg';
import img3 from '../../assets/images/homeCarousel/3.jpg';
import img4 from '../../assets/images/homeCarousel/4.jpg';

const HomeHero = () => {
  return (
    <div>
         <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={true}
        history={{
          key: 'slide',
        }}
        modules={[Navigation, Pagination, History]}
        className="mySwiper"
      >
        <SwiperSlide data-history="1">{img1}</SwiperSlide>
        <SwiperSlide data-history="2">{img2}</SwiperSlide>
        <SwiperSlide data-history="3">{img3}</SwiperSlide>
        <SwiperSlide data-history="4">{img4}</SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default HomeHero;
