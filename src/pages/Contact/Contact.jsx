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
                  <p>01701-290000, +8801766673800, +8801971112223</p>
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
                    80, Rupayan Karim Tower, <br /> Kakrail, Dhaka-1000, Dhaka,
                    Bangladesh
                  </p>
                </div>
              </div>

              <div className="shadow text-center rounded pb-8 mt-8">
                <div className="-mt-6 w-14 h-14 mx-auto rounded-full shadow flex justify-center items-center bg-base-100">
                  <MdOutlineFax className="text-3xl text-secondary" />
                </div>

                <h2 className="text-xl font-semibold mt-4 text-neutral">Fax</h2>
                <div className="mt-3 text-neutral-content">
                  <p>+88-02-58314330</p>
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
                  <p>info@skrpsolar.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.281912091146!2d90.40488907487178!3d23.737324389279056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f361109429%3A0xb184f50614bc5943!2sSKRP%20GROUP!5e0!3m2!1sen!2sbd!4v1699758760482!5m2!1sen!2sbd"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
