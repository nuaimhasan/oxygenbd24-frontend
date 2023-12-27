import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function Clients() {
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-3xl text-center w-max mx-auto border-b-2 border-primary text-priamry pb-2 font-semibold text-neutral">
          Clients
        </h2>

        <Swiper
          loop={true}
          pagination={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          className="py-10 alliances"
        >
          <SwiperSlide>
            <img src="/images/clients/1.png" alt="" className="h-14 mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/clients/2.png" alt="" className="h-14 mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/clients/3.png" alt="" className="h-20 mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/clients/4.png" alt="" className="h-14 mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/clients/5.png" alt="" className="h-14 mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/clients/6.png" alt="" className="h-14 mx-auto" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
