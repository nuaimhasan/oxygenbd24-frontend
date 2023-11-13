import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useGetTeamsQuery } from "../../Redux/team/teamApi";
import Spinner from "../Spinner/Spinner";

export default function Team() {
  const { data, isLoading } = useGetTeamsQuery();
  if (isLoading) {
    return <Spinner />;
  }

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
          {data?.data?.map((team) => (
            <SwiperSlide key={team?.uuid}>
              <div className="text-center bg-base-100 shadow px-4 py-10 rounded h-72">
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/images/teams/${
                    team.image
                  }`}
                  alt=""
                  className="w-32 mx-auto h-32 rounded-full border border-primary"
                />
                <h2 className="text-xl font-semibold mt-2">{team.name} </h2>
                <p className="text-sm text-neutral">{team.designation}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
