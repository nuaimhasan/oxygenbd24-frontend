import { FaLeaf, FaTintSlash } from "react-icons/fa";
import { MdClose } from "react-icons/md";

export default function Services() {
  return (
    <section className="py-5 sm:py-10">
      <div className="container">
        <div className="md:mx-20 grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-6">
          <div className="feature-item h-24 sm:h-[160px]">
            <FaLeaf className="text-3xl md:text-5xl text-black/80" />
            <h2 className="text-base-100 sm:text-xl md:text-2xl font-medium">
              100% Natural
            </h2>
          </div>

          <div className="feature-item h-24 sm:h-[160px]">
            <FaTintSlash className="text-3xl md:text-5xl text-black/80" />
            <h2 className="text-base-100 sm:text-xl md:text-2xl font-medium">
              Anti Hair Fall
            </h2>
          </div>

          <div className="feature-item h-24 sm:h-[160px]">
            <MdClose className="text-3xl md:text-5xl text-black/80" />
            <h2 className="text-base-100 sm:text-xl md:text-2xl font-medium">
              Hypoallergenic
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
