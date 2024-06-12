import { useGetBannerQuery } from "../../Redux/banner/bannerApi";

export default function Banner() {
  const { data, isLoading } = useGetBannerQuery();
  const banner = data?.data[0];

  if (isLoading) return <div className="bg-[#78f44f38] w-full h-screen"></div>;

  return (
    <section className="pt-10 h-screen banner" id="home">
      <div className="container h-full">
        <div className="h-full flex justify-center items-center">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl text-secondary">
                {banner?.title}
              </h2>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold my-1 sm:my-3 text-neutral">
                {banner?.subTitle}
              </h2>
              <p className="text-sm sm:text-[15px] text-neutral-content">
                {banner?.description}
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm sm:text-[15px]">
                <a href="#product" className="primary_btn">
                  Buy Now
                </a>
                <a
                  href="#contact"
                  className="px-6 py-2 rounded border-2 border-black/80 hover:bg-black/80 duration-300 text-black hover:text-base-100"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/banner/${
                  banner?.image
                }`}
                alt=""
                className="w-[75%] sm:w-[88%] mx-auto sm:ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
