import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function Team() {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container">
        <h2 className="text-3xl text-center w-max mx-auto border-b-2 border-primary text-priamry pb-2 font-semibold text-neutral">
          Our Team
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
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className="py-10"
        >
          <SwiperSlide>
            <div className="text-center bg-base-100 shadow px-4 py-10 rounded">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                alt=""
                className="w-32 mx-auto h-32 rounded-full border border-primary"
              />
              <h2 className="text-xl font-semibold mt-2">Name </h2>
              <p className="text-sm text-neutral">Designation</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="text-center bg-base-100 shadow px-4 py-10 rounded">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                alt=""
                className="w-32 mx-auto h-32 rounded-full border border-primary"
              />
              <h2 className="text-xl font-semibold mt-2">Name </h2>
              <p className="text-sm text-neutral">Designation</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="text-center bg-base-100 shadow px-4 py-10 rounded">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                alt=""
                className="w-32 mx-auto h-32 rounded-full border border-primary"
              />
              <h2 className="text-xl font-semibold mt-2">Name </h2>
              <p className="text-sm text-neutral">Designation</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="text-center bg-base-100 shadow px-4 py-10 rounded">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                alt=""
                className="w-32 mx-auto h-32 rounded-full border border-primary"
              />
              <h2 className="text-xl font-semibold mt-2">Name </h2>
              <p className="text-sm text-neutral">Designation</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="text-center bg-base-100 shadow px-4 py-10 rounded">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                alt=""
                className="w-32 mx-auto h-32 rounded-full border border-primary"
              />
              <h2 className="text-xl font-semibold mt-2">Name </h2>
              <p className="text-sm text-neutral">Designation</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center bg-base-100 shadow px-4 py-10 rounded">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                alt=""
                className="w-32 mx-auto h-32 rounded-full border border-primary"
              />
              <h2 className="text-xl font-semibold mt-2">Name </h2>
              <p className="text-sm text-neutral">Designation</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
