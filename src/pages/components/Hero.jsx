import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './styles.css';
// import required modules
import { Pagination, Navigation } from "swiper";
import slider7 from '../../../public/assets/teacher7.jpg'
import slider6 from '../../../public/assets/teacher6.jpg'
import slider5 from '../../../public/assets/teacher5.jpg'
import slider4 from '../../../public/assets/teacher4.jpg'
import slider3 from '../../../public/assets/teacher3.jpg'
import slider2 from '../../../public/assets/teacher2.jpg'
import slider1 from "../../../public/assets/teacher7.jpg";

const Hero = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider6} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slider7} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slider5} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slider4} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slider3} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slider2} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slider1} />
        </SwiperSlide>

      </Swiper>
    </>
  );
};

export default Hero;
