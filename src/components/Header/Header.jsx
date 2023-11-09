import "./Header.css";
import { NavLink, Link } from "react-router-dom";
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
      if (e.target.closest(".menu_wrap ul li a")) {
        setmobileMenu(false);
      }
    });
  }, []);

  return (
    <header className="py-2 sticky top-0 bg-[#ffffffcc] backdrop-blur-[30px] z-50 shadow">
      <div className="container">
        <div className="header">
          <Link to="/">
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
                <NavLink to="/solar-and-cleantech-solutions">
                  Solar and Cleantech Solutions
                </NavLink>
              </li>
              <li>
                <NavLink to="/dre-solutions">DRE and Off Grid</NavLink>
              </li>
              <li>
                <NavLink to="/rooftop-and-ess">On Grid : Rooftop & ESS</NavLink>
              </li>
              <li>
                <button
                  className="incubator"
                  onClick={() => setIncubator(!incubator)}
                >
                  Incubator Projects <MdArrowDropDown className="text-lg" />
                </button>

                <ol className={`dropdown ${incubator && "dropdown_show"}`}>
                  <li>
                    <NavLink to="/uddom">Uddom</NavLink>
                  </li>
                  <li>
                    <NavLink to="/e-mobility">Emobility</NavLink>
                  </li>
                </ol>
              </li>
              <li>
                <button className="more" onClick={() => setMoreMenu(!moreMenu)}>
                  More <MdArrowDropDown className="text-lg" />
                </button>

                <ol className={`dropdown ${moreMenu && "dropdown_show"}`}>
                  <li>
                    <NavLink to="our-factory">Our Factory</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact-us">Contact Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about-us">About Us</NavLink>
                  </li>
                </ol>
              </li>

              <li>
                <button>
                  <BiSearch className="text-xl" />
                </button>
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
