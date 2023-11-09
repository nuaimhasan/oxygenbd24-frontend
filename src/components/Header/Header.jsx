import "./Header.css";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";

export default function Header() {
  const [moreMenu, setMoreMenu] = useState(false);
  const [incubator, setIncubator] = useState(false);
  const [mobileMenu, setmobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!e.target.closest(".more")) {
        setMoreMenu(false);
      }
      if (!e.target.closest(".incubator")) {
        setIncubator(false);
      }
    });
  }, []);

  return (
    <header className="py-2 sticky top-0 bg-[#ffffffcc] backdrop-blur-[30px] z-50">
      <div className="container">
        <div className="header">
          <Link to="">
            <img
              src="/images/logo/logo.png"
              alt="rahaimafroz solar logo"
              className="w-28 sm:w-36 xl:w-40"
            />
          </Link>

          <nav className="menu_wrap flex items-center gap-2">
            <button
              onClick={() => setmobileMenu(false)}
              className={`overlay min-[1150px]:hidden ${
                mobileMenu && "overlay_show"
              }`}
            ></button>

            <ul className={`${mobileMenu && "show"}`}>
              <li>
                <Link to="/solar-and-cleantech-solutions">
                  Solar and Cleantech Solutions
                </Link>
              </li>
              <li>
                <Link to="">DRE and Off Grid</Link>
              </li>
              <li>
                <Link to="">On Grid : Rooftop & ESS</Link>
              </li>
              <li>
                <Link
                  className="incubator"
                  onClick={() => setIncubator(!incubator)}
                >
                  Incubator Projects <MdArrowDropDown className="text-lg" />
                </Link>

                <ol className={`dropdown ${incubator && "dropdown_show"}`}>
                  <li>
                    <Link to="">Uddom</Link>
                  </li>
                  <li>
                    <Link to="">Emobility</Link>
                  </li>
                </ol>
              </li>
              <li>
                <Link className="more" onClick={() => setMoreMenu(!moreMenu)}>
                  More <MdArrowDropDown className="text-lg" />
                </Link>

                <ol className={`dropdown ${moreMenu && "dropdown_show"}`}>
                  <li>
                    <Link to="">Factory</Link>
                  </li>
                  <li>
                    <Link to="">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="">About Us</Link>
                  </li>
                </ol>
              </li>

              <li>
                <Link>
                  <BiSearch className="text-xl" />
                </Link>
              </li>
            </ul>

            <button
              onClick={() => setmobileMenu(true)}
              className="min-[1150px]:hidden"
            >
              <AiOutlineMenu className="text-xl" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
