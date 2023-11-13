import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function TopHeader() {
  return (
    <section className="hidden sm:block py-1 bg-primary text-base-100">
      <div className="w-[90%] xl:w-[1250px] mx-auto">
        <div className="flex justify-between items-center">
          <ul className="flex items-center">
            <li>
              <Link
                to="https://www.facebook.com/skrprenewableenergy?mibextid=ZbWKwL"
                target="_blank"
                className="hover:text-secondary duration-200"
              >
                <BiLogoFacebook className="text-xl" />
              </Link>
            </li>
            <li>
              <Link
                to=""
                target="_blank"
                className="w-7 h-7 rounded-full bg-primary/50 flex justify-center items-center text-base-100 hover:text-secondary duration-200"
              >
                <BiLogoLinkedin className="text-xl" />
              </Link>
            </li>
          </ul>

          <ul className="flex items-center gap-4 text-[13px]">
            <li>
              <p className="flex items-center gap-1">
                <BsTelephone className="text-xs" />
                01701-290000
              </p>
            </li>
            <li>
              <p className="flex items-center gap-1">
                <MdOutlineMail className="text-sm" />
                info@skrpsolar.com
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
