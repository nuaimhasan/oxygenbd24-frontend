import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useGetBannersQuery } from "../../Redux/banner/bannerApi";
import Spinner from "../Spinner/Spinner";

export default function Banner() {
  const { data, isLoading } = useGetBannersQuery();
  if (isLoading) {
    return <Spinner />;
  }

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
        {data?.data?.map((banner) => (
          <SwiperSlide key={banner?.uuid}>
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/images/banners/${
                banner.image
              }`}
              alt="banner1"
              className="w-full h-72 md:h-[600px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
