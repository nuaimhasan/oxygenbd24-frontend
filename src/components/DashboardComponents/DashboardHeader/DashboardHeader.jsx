import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

export default function DashboardHeader({ setSidebar }) {
  const { pathname } = useLocation();

  return (
    <header className="px-3 py-2 rounded bg-primary text-base-100">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSidebar(true)}
            className="dashboard_sidebar_btn lg:hidden"
          >
            <HiOutlineMenuAlt2 className="text-xl" />
          </button>
          <div className="flex items-center text-[15px]">
            <Link to="/admin/dashboard">Dashboard</Link>
            {pathname !== "/admin/dashboard" && (
              <p className="hidden sm:block">{pathname}</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img
            src="/images/demo-user.avif"
            alt=""
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </header>
  );
}
