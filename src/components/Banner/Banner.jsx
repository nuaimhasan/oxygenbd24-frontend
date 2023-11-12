import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function Banner() {
  return (
    <div>
      <Swiper
        loop={true}
        pagination={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <img
            src="/images/banner/6.jpg"
            alt="banner1"
            className="w-full h-72 sm:h-[600px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/banner/1.png"
            alt="banner1"
            className="w-full h-72 sm:h-[600px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/banner/2.jpg"
            alt="banner1"
            className="w-full h-72 sm:h-[600px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/banner/3.jpg"
            alt="banner1"
            className="w-full h-72 sm:h-[600px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/banner/4.jpg"
            alt="banner1"
            className="w-full h-72 sm:h-[600px]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
