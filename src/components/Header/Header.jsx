import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { useGetLogosQuery } from "../../Redux/logo/logoApi";
import AboutDropdown from "./AboutDropdown";
import "./Header.css";
import ProductDropdown from "./ProductDropdown";

export default function Header() {
  const [mobileMenu, setmobileMenu] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [searchDropdown, setSearchDropdown] = useState(false);

  const { data } = useGetLogosQuery();

  console.log(data?.data);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        e.target.closest(".menu_wrap ul li a") &&
        !e.target.closest(".menu_wrap ul li a svg")
      ) {
        setmobileMenu(false);
      }

      if (!e.target.closest(".about_btn")) {
        setAboutDropdown(false);
      }

      if (!e.target.closest(".products_btn")) {
        setProductsDropdown(false);
      }

      if (!e.target.closest(".search_btn") && !e.target.closest(".search")) {
        setSearchDropdown(false);
      }
    });
  }, []);

  return (
    <header className="py-2 2xl:py-0 sticky top-0 bg-[#ffffffcc] backdrop-blur-[30px] z-50 shadow">
      <div className="w-[90%] xl:w-[1250px] mx-auto relative">
        <div className="header">
          <Link to="/">
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/logo/${
                data?.data[0]?.logo
              }`}
              alt="logo"
              className="w-36 sm:w-44 xl:w-52 h-9"
            />
          </Link>

          <nav className="menu_wrap flex items-center gap-2">
            <button
              onClick={() => setmobileMenu(false)}
              className={`overlay 2xl:hidden ${mobileMenu && "overlay_show"}`}
            ></button>

            <ul className={`${mobileMenu && "show"}`}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className="about_btn"
                  onClick={() => setAboutDropdown(!aboutDropdown)}
                >
                  <span>About Us</span> <MdKeyboardArrowDown />
                </NavLink>
                <AboutDropdown aboutDropdown={aboutDropdown} />
              </li>
              <li>
                <Link
                  to="/products"
                  className="products_btn"
                  onClick={() => setProductsDropdown(!productsDropdown)}
                >
                  Products <MdKeyboardArrowDown />
                </Link>

                <ProductDropdown productsDropdown={productsDropdown} />
              </li>
              <li>
                <NavLink to="/news-events">News & Events</NavLink>
              </li>
              <li>
                <NavLink to="/clients">Clients</NavLink>
              </li>
              <li>
                <NavLink to="/career">Career</NavLink>
              </li>
              <li>
                <NavLink to="/contact-us">Contact Us</NavLink>
              </li>
            </ul>

            <div className="flex gap-3 items-center ">
              <div className="relative">
                <button
                  className="mt-1 search_btn ml-px hover:text-secondary duration-200"
                  onClick={() => setSearchDropdown(!searchDropdown)}
                >
                  <BsSearch className="text-lg xl:text-base" />
                </button>
              </div>

              {searchDropdown && (
                <div className="search w-full md:w-[500px] absolute top-[120%] right-0 bg-base-100 p-4 shadow">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="search"
                      className="border rounded px-4 py-1.5 outline-none w-full"
                    />
                    <div className="cursor-pointer px-3 bg-secondary text-base-100 absolute right-0 top-0 h-full flex justify-center items-center">
                      <BsSearch className="text-base" />
                    </div>
                  </div>
                </div>
              )}

              <button onClick={() => setmobileMenu(true)} className="xl:hidden">
                <AiOutlineMenu className="text-2xl" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
