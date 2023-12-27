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
            src={`/images/Pic_14-1024x520.jpg`}
            alt="banner1"
            className="w-full md:h-[600px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={`/images/rooftop3-300x197.png`}
            alt="banner1"
            className="w-full md:h-[600px]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
