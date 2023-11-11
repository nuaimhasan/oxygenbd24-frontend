import { Link } from "react-router-dom";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail, MdOutlineLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#031A2F] pt-10 pb-5">
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 pb-14">
          <div>
            <img
              src="/images/logo/footer-logo.png"
              alt=""
              className="w-52 opacity-90"
            />
          </div>
          <div>
            <h2 className="text-gray-300 text-xl font-medium">Quick Link</h2>
            <ul className="text-gray-400 font-light pl-2 mt-2 flex flex-col gap-1.5 text-[15px]">
              <li>
                <Link to="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-gray-300 text-xl font-medium">Contact</h2>
            <ul className="text-gray-400 font-light pl-2 mt-2 flex flex-col gap-1.5 text-[15px]">
              <li>
                <Link to="" className="hover:underline flex items-center gap-1">
                  <BsTelephone />
                  +880-2-41080223
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="hover:underline flex items-center gap-1"
                >
                  <MdOutlineMail />
                  solar@rahimafrooz.com
                </Link>
              </li>
              <li>
                <div className="flex gap-1">
                  <p className="text-lg">
                    <MdOutlineLocationOn />
                  </p>
                  <p>
                    13 Bir Uttam AK Khandakar Road Mohakhali C/A, ARZED Chamber
                    (4th floor) Dhaka-1212
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-5">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm font-light">
              Copyright © 2020 Rahimafrooz. All rights reserved.
            </p>

            <div className="flex gap-3 items-center">
              <Link
                to="https://www.facebook.com/RahimafroozsolarRA"
                target="_blank"
                className="w-7 h-7 rounded-full bg-primary/50 flex justify-center items-center text-base-100 hover:-mt-1 duration-200"
              >
                <BiLogoFacebook className="text-xl" />
              </Link>
              <Link
                to="https://twitter.com/"
                target="_blank"
                className="w-7 h-7 rounded-full bg-primary/50 flex justify-center items-center text-base-100 hover:-mt-1 duration-200"
              >
                <AiOutlineTwitter className="text-xl" />
              </Link>
              <Link
                to="https://www.linkedin.com/company/rahimafrooz-renewable-energy-ltd-rrel/"
                target="_blank"
                className="w-7 h-7 rounded-full bg-primary/50 flex justify-center items-center text-base-100 hover:-mt-1 duration-200"
              >
                <BiLogoLinkedin className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
