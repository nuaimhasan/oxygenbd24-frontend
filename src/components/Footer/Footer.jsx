import { Link } from "react-router-dom";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail, MdOutlineLocationOn } from "react-icons/md";
import { useGetLogosQuery } from "../../Redux/logo/logoApi";
import { useGetContactsQuery } from "../../Redux/contact/contactApi";

export default function Footer() {
  const { data, isLoading } = useGetLogosQuery();
  const logo = data?.data[0]?.logo;

  const { data: contactData } = useGetContactsQuery();
  const contact = contactData?.data[0];

  return (
    <footer className="bg-[#4f9ff428] pt-10 pb-5">
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 pb-6 sm:pb-14">
          <div>
            <Link to="/">
              {isLoading ? (
                <img src="/images/logo/logo.png" alt="logo" className="w-36" />
              ) : (
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/logo/${logo}`}
                  alt="logo"
                  className="w-36"
                />
              )}
            </Link>
            <p className="text-neutral-content text-sm mt-1">
              oxygenbd24 is a magical solution to all hair problems made from
              completely natural ingredients
            </p>
          </div>
          <div>
            <h2 className="text-xl font-medium">Quick Link</h2>
            <ul className="text-neutral-content font-light pl-2 mt-2 flex flex-col gap-1.5 text-[15px]">
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#product" className="hover:underline">
                  Product
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium">Contact</h2>
            <ul className="text-neutral-content font-light pl-2 mt-2 flex flex-col gap-1.5 text-[15px]">
              <li>
                <p className="flex items-center gap-1.5">
                  <BsTelephone />
                  {contact?.phone}
                </p>
              </li>
              <li>
                <p className="flex items-center gap-1.5">
                  <MdOutlineMail />
                  {contact?.email}
                </p>
              </li>
              <li>
                <div className="flex gap-1">
                  <p className="text-lg">
                    <MdOutlineLocationOn />
                  </p>
                  <p>{contact?.address}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-5">
          <div className="flex justify-between items-center">
            <p className="text-sm font-light">
              Copyright © 2024 oxygenbd24. All rights reserved. Powered by{" "}
              <Link
                to="https://emanagerit.com"
                target="_blank"
                className="underline"
              >
                eManager It Ltd
              </Link>
            </p>

            <div className="flex gap-3 items-center">
              <Link
                to={contact?.facebookLink}
                target="_blank"
                className="w-7 h-7 rounded-full bg-primary flex justify-center items-center text-base-100 hover:-mt-1 duration-200"
              >
                <BiLogoFacebook className="text-xl" />
              </Link>
              <Link
                to={contact?.linkedinLink}
                target="_blank"
                className="w-7 h-7 rounded-full bg-primary flex justify-center items-center text-base-100 hover:-mt-1 duration-200"
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
