import { Link, NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";
import { AiOutlineBorder } from "react-icons/ai";
import { BiLogoMicrosoftTeams } from "react-icons/bi";
// import { FaSolarPanel } from "react-icons/fa";

export default function DashboardSidebar() {
  return (
    <div className="p-6">
      <Link to="/" className="block border-b pb-4">
        <img src="/images/logo/logo.png" alt="" className="w-32 mx-auto" />
      </Link>

      <nav className="dashboard_siderbar mt-6">
        <div>
          <ul>
            <li>
              <NavLink to="/admin/dashboard">
                <RxDashboard />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/user/user-lists">
                <FiUsers className="text-lg" />
                User List
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/team/team-lists">
                <BiLogoMicrosoftTeams className="text-lg" />
                Our Team
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/alliances/alliances-lists">
                <FiUsers className="text-lg" />
                Alliances
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/banner/banner-lists">
                <AiOutlineBorder className="text-lg" />
                Banners
              </NavLink>
            </li>

            {/* <li>
              <h2 className="my-1">Products</h2>
              <NavLink to="/admin/product/product-lists">
                <FaSolarPanel className="text-lg" />
                Product Lists
              </NavLink>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}
