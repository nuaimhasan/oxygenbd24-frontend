import { Link, NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";

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
                <FiUsers className="text-lg" />
                Our Team
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/alliances/alliances-lists">
                <FiUsers className="text-lg" />
                Alliances
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="mt-2">
          <ul></ul>
        </div>
      </nav>
    </div>
  );
}
