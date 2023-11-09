import Lottie from "lottie-react";
import contactAnimation from "../../../public/images/contact/contact.json";
import { BsTelephone } from "react-icons/bs";
import {
  MdOutlineLocationOn,
  MdOutlineFax,
  MdOutlineMailOutline,
} from "react-icons/md";

export default function Contact() {
  window.scroll(0, 0);
  return (
    <section className="">
      <div>
        <img src="/images/contact/contact.jpg" alt="" className="w-full h-60" />
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-4 items-center">
          <div className="lg:w-[80%] mx-auto">
            <Lottie animationData={contactAnimation} loop={true} />
          </div>
          <div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="shadow text-center rounded pb-8">
                <div className="-mt-6 w-14 h-14 mx-auto rounded-full shadow flex justify-center items-center bg-base-100">
                  <BsTelephone className="text-3xl text-secondary" />
                </div>

                <h2 className="text-xl font-semibold mt-4 text-neutral">
                  Phone
                </h2>
                <div className="mt-3 text-neutral-content">
                  <p>+880-2-41080223, +880-2-41080224, +880-2-41080225</p>
                </div>
              </div>

              <div className="shadow text-center rounded pb-8 mt-8 sm:mt-0">
                <div className="-mt-6 w-14 h-14 mx-auto rounded-full shadow flex justify-center items-center bg-base-100">
                  <MdOutlineLocationOn className="text-3xl text-secondary" />
                </div>

                <h2 className="text-xl font-semibold mt-4 text-neutral">
                  Address
                </h2>
                <div className="mt-3 text-neutral-content">
                  <p>
                    13 Bir Uttam AK Khandakar Road Mohakhali C/A, ARZED Chamber
                    (4th floor) Dhaka-1212
                  </p>
                </div>
              </div>

              <div className="shadow text-center rounded pb-8 mt-8">
                <div className="-mt-6 w-14 h-14 mx-auto rounded-full shadow flex justify-center items-center bg-base-100">
                  <MdOutlineFax className="text-3xl text-secondary" />
                </div>

                <h2 className="text-xl font-semibold mt-4 text-neutral">Fax</h2>
                <div className="mt-3 text-neutral-content">
                  <p>+880-2-41080226</p>
                </div>
              </div>

              <div className="shadow text-center rounded pb-8 mt-8">
                <div className="-mt-6 w-14 h-14 mx-auto rounded-full shadow flex justify-center items-center bg-base-100">
                  <MdOutlineMailOutline className="text-3xl text-secondary" />
                </div>

                <h2 className="text-xl font-semibold mt-4 text-neutral">
                  Email
                </h2>
                <div className="mt-3 text-neutral-content">
                  <p>solar@rahimafrooz.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12280.516880558542!2d90.40123164460823!3d23.78231948775977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c76ddb9c81ef%3A0x1d5275b0e51dc479!2sRahimafrooz%20Solar!5e0!3m2!1sen!2sus!4v1699536178942!5m2!1sen!2sus"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
