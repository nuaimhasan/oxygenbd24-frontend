import { MdCall, MdEmail } from "react-icons/md";
import { FaMap } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="product_wrap" id="contact">
      <div className="container">
        <h2 className="text-2xl font-medium">Get In Touch</h2>

        <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <div className="p-2.5 rounded-full bg-base-100 text-black/80">
              <MdCall className="md:text-2xl" />
            </div>
            <div>
              <h2 className="sm:text-xl font-medium">Phone</h2>
              <p className="-mt-1 text-sm md:text-base">01977-779279</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-2.5 rounded-full bg-base-100 text-black/80">
              <MdEmail className="md:text-2xl" />
            </div>
            <div>
              <h2 className="sm:text-xl font-medium">Email</h2>
              <p className="-mt-1 text-sm md:text-base">
                magicalhairoil990@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-2.5 rounded-full bg-base-100 text-black/80">
              <FaMap className="md:text-xl" />
            </div>
            <div>
              <h2 className="sm:text-xl font-medium">Location</h2>
              <p className="-mt-1 text-sm md:text-base">
                Zigatola, Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
