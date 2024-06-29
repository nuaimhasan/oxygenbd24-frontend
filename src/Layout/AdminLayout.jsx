import "./DashboardLayout.css";
import { useState, useEffect, Suspense } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AdminHeader from "../components/AdminComponents/AdminHeader/AdminHeader";
import AdminSidebar from "../components/AdminComponents/AdminSidebar/AdminSidebar";
import Spinner from "../components/Spinner/Spinner";

export default function DashboardLayout() {
  const [sidebar, setSidebar] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname == "/admin") {
      navigate("/admin/dashboard");
    }
  }, [pathname, navigate]);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        (!e.target.closest(".admin_sidebar") &&
          !e.target.closest(".admin_sidebar_btn")) ||
        e.target.closest(".admin_siderbar ul li a")
      ) {
        setSidebar(false);
      }
    });
  }, []);

  return (
    <section className="flex">
      <aside className={`admin_sidebar ${sidebar && "admin_sidebar_show"}`}>
        <AdminSidebar />
      </aside>
      <div className="admin_content">
        <AdminHeader setSidebar={setSidebar} />
        <main className="sm:p-5 py-5">
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </section>
  );
}
