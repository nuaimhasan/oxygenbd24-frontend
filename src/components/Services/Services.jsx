import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineAssignmentReturn } from "react-icons/md";

export default function Services() {
  return (
    <section className="py-5 sm:py-10">
      <div className="container">
        <div>
          <h2 className="text-center">
            <span className="text-base text-neutral">
              There are some redeeming factors
            </span>
            <br />
            <span className="text-primary font-semibold text-2xl sm:text-3xl">
              We Provide High Quality Medical Oxygen
            </span>
          </h2>
          <p className="mt-2 text-neutral-content text-center sm:w-1/2 mx-auto text-sm sm:text-[15px]">
            Our company specializes in offering top-tier medical equipment,
            ensuring utmost quality for healthcare facilities worldwide.
          </p>
        </div>

        <div className="mt-10 md:mx-20 grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-6">
          <div className="feature-item h-24 sm:h-[160px]">
            <TbTruckDelivery className="text-3xl md:text-5xl text-black/80" />
            <h2 className="text-base-100 sm:text-xl md:text-2xl font-medium">
              Fast Delivery
            </h2>
          </div>

          <div className="feature-item h-24 sm:h-[160px]">
            <AiOutlineLike className="text-3xl md:text-5xl text-black/80" />
            <h2 className="text-base-100 sm:text-xl md:text-2xl font-medium">
              Best Quality
            </h2>
          </div>

          <div className="feature-item h-24 sm:h-[160px]">
            <MdOutlineAssignmentReturn className="text-3xl md:text-5xl text-black/80" />
            <h2 className="text-base-100 sm:text-xl md:text-2xl font-medium">
              Free Return
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
