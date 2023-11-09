import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function Team() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container">
        <h2 className="text-4xl text-center w-max mx-auto border-b-2 border-primary text-priamry pb-2 font-semibold text-neutral">
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
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="py-10"
        >
          <SwiperSlide>
            <div className="text-center">
              <img
                src="/images/team/Munawar-Misbah-Moin.png"
                alt=""
                className="w-32 mx-auto h-32 rounded-full border border-primary"
              />
              <h2 className="text-xl font-semibold mt-2">
                Munawar Misbah Moin
              </h2>
              <p className="text-sm text-neutral">Managing Director</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img
                src="/images/team/SMABusinessHead.jpeg"
                alt=""
                className="w-32 mx-auto h-32 rounded-full border border-primary"
              />
              <h2 className="text-xl font-semibold mt-2">
                Shaikh Monowar Ahmad
              </h2>
              <p className="text-sm text-neutral">Head of Business</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img
                src="/images/team/NasirUddinOffGrid.jpg"
                alt=""
                className="w-32 mx-auto h-32 rounded-full border border-primary"
              />
              <h2 className="text-xl font-semibold mt-2">
                Md Nasir Uddin Biswas
              </h2>
              <p className="text-sm text-neutral">Manager - Off-Grid</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img
                src="/images/team/M.-K-Pasha-Khan.jpeg"
                alt=""
                className="w-32 mx-auto h-32 rounded-full border border-primary"
              />
              <h2 className="text-xl font-semibold mt-2">M. K. Pasha Khan</h2>
              <p className="text-sm text-neutral">Head of Sales</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="text-center">
              <img
                src="/images/team/mrn.jpeg"
                alt=""
                className="w-32 mx-auto h-32 rounded-full border border-primary"
              />
              <h2 className="text-xl font-semibold mt-2">
                Md. Mizanur Rahman Munsi
              </h2>
              <p className="text-sm text-neutral">
                Manager - Treasury & Accounts
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img
                src="/images/team/ZRK.jpg"
                alt=""
                className="w-32 mx-auto h-32 rounded-full border border-primary"
              />
              <h2 className="text-xl font-semibold mt-2">Zinat Roksana</h2>
              <p className="text-sm text-neutral">
                Acting In Charge – Procurement and Planning
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="grid grid-cols-5 gap-5 mt-8"></div>
      </div>
    </section>
  );
}
