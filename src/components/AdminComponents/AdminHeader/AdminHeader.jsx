import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { userLogout } from "../../../Redux/user/userSlice";

export default function AdminHeader() {
  const [mobileMenu, setmobileMenu] = useState(false);
  const dispatch = useDispatch();

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
    <header className={`py-2 2xl:py-0 w-full sticky top-0 z-50 bg-[#74b650f5]`}>
      <div className="container relative">
        <div className="header">
          <Link to="/admin/dashboard">
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
                <NavLink to="/admin/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/admin/orders">Orders</NavLink>
              </li>
              <li>
                <button
                  onClick={() => dispatch(userLogout())}
                  className="bg-red-600 px-4 py-1 rounded text-base-100"
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
