import { Link } from "react-router-dom";
import { useGetAboutUsQuery } from "../../Redux/about/aboutApi";
import parse from "html-react-parser";

export default function About() {
  const { data } = useGetAboutUsQuery();
  const about = data?.data[0];
  const description = about?.description && parse(about?.description);

  return (
    <section className="py-7 sm:py-10 bg-[#4f9ff40f]" id="about">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <img
              loading="lazy"
              src={`${import.meta.env.VITE_BACKEND_URL}/aboutus/${
                about?.image
              }`}
              alt=""
              className="w-full sm:w-[60%] lg:w-full mx-auto h-60 sm:h-80 lg:h-[420px] rounded"
            />
          </div>

          <div>
            <h2 className="text-2xl sm:text-4xl text-neutral">
              <span className="font-semibold text-primary">{about?.title}</span>
            </h2>

            <div>
              <div className="text-[15px] text-neutral-content mt-3 flex flex-col gap-2">
                {description}
              </div>

              <div className="mt-5">
                <Link
                  to="#product"
                  className="w-max px-6 py-2 rounded bg-primary text-base-100 mt-2"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
