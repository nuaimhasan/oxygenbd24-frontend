import "./Header.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import { useGetLogosQuery } from "../../Redux/logo/logoApi";

export default function Header() {
  const [mobileMenu, setmobileMenu] = useState(false);
  const [activeHeader, setActiveHeader] = useState(false);
  // const { data } = useGetLogosQuery();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 10) {
        setActiveHeader(true);
      } else {
        setActiveHeader(false);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        e.target.closest(".menu_wrap ul li a") &&
        !e.target.closest(".menu_wrap ul li a svg")
      ) {
        setmobileMenu(false);
      }
    });
  }, []);

  return (
    <header
      className={`py-2 2xl:py-0 w-full fixed top-0 z-50 ${
        activeHeader && "bg-[#74b650f5]"
      }`}
    >
      <div className="container relative">
        <div className="header">
          <Link to="/">
            {/* <img
              src={`${import.meta.env.VITE_BACKEND_URL}/logo/${
                data?.data[0]?.logo
              }`}
              alt="logo"
              className="w-36 sm:w-44 xl:w-52 h-9"
            /> */}
            <img
              src="/images/logo/logo-light.png"
              alt="logo"
              className="w-40 sm:w-44 xl:w-56"
            />
          </Link>

          <nav className="menu_wrap flex items-center gap-2">
            <button
              onClick={() => setmobileMenu(true)}
              className="flex justify-end sm:hidden"
            >
              <HiOutlineMenuAlt3 className="text-2xl text-base-100" />
            </button>

            <button
              onClick={() => setmobileMenu(false)}
              className={`overlay sm:hidden ${mobileMenu && "overlay_show"}`}
            ></button>

            <ul className={`${mobileMenu && "show"}`}>
              <li>
                <a href="#home" className="text-primary sm:text-base-100">
                  Home
                </a>
              </li>
              <li>
                <a href="#product">Product</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
