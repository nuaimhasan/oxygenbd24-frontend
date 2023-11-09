import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

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
          <div className="h-[600px] relative">
            <div>
              <img
                src="/images/banner/banner1.jpg"
                alt="banner1"
                className="w-full h-[600px]"
              />
            </div>

            <div className="banner_content">
              <div className="container">
                <div className="lg:w-1/2">
                  <h2>Solarising Bangladesh</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    at, laboriosam doloribus, voluptas qui exercitationem
                    distinctio delectus natus harum aut voluptate sed quo rem
                    mollitia omnis sit provident consequuntur culpa velit
                    doloremque? Mollitia corporis sapiente rerum quibusdam natus
                    praesentium quae quaerat adipisci animi? Rem numquam
                    accusantium hic eos, non dolorem.
                  </p>
                  <Link to="/contact-us" className="secondary_btn">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[600px] relative">
            <div>
              <img
                src="/images/banner/banner2.jpg"
                alt="banner1"
                className="w-full h-[600px]"
              />
            </div>

            <div className="banner_content">
              <div className="container">
                <div className="lg:w-1/2">
                  <h2>Solarising Bangladesh</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    at, laboriosam doloribus, voluptas qui exercitationem
                    distinctio delectus natus harum aut voluptate sed quo rem
                    mollitia omnis sit provident consequuntur culpa velit
                    doloremque? Mollitia corporis sapiente rerum quibusdam natus
                    praesentium quae quaerat adipisci animi? Rem numquam
                    accusantium hic eos, non dolorem.
                  </p>
                  <Link to="/contact-us" className="secondary_btn">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[600px] relative">
            <div>
              <img
                src="/images/banner/banner3.jpg"
                alt="banner1"
                className="w-full h-[600px]"
              />
            </div>

            <div className="banner_content">
              <div className="container">
                <div className="lg:w-1/2">
                  <h2>Solarising Bangladesh</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    at, laboriosam doloribus, voluptas qui exercitationem
                    distinctio delectus natus harum aut voluptate sed quo rem
                    mollitia omnis sit provident consequuntur culpa velit
                    doloremque? Mollitia corporis sapiente rerum quibusdam natus
                    praesentium quae quaerat adipisci animi? Rem numquam
                    accusantium hic eos, non dolorem.
                  </p>
                  <Link to="/contact-us" className="secondary_btn">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
