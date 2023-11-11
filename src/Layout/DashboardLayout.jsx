import "./DashboardLayout.css";
import { useEffect } from "react";
import { useState } from "react";
import DashboardSidebar from "../components/DashboardComponents/DashboardSidebar/DashboardSidebar";
import DashboardHeader from "../components/DashboardComponents/DashboardHeader/DashboardHeader";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        (!e.target.closest(".dashboard_siderbar_wrap") &&
          !e.target.closest(".dashboard_sidebar_btn")) ||
        e.target.closest(".dashboard_siderbar ul li a")
      ) {
        setSidebar(false);
      }
    });
  }, []);

  return (
    <section className="flex gap-5">
      <aside
        className={`dashboard_siderbar_wrap ${
          sidebar && "dashboard_sidebar_show"
        }`}
      >
        <DashboardSidebar />
      </aside>
      <div className="dashboard_content">
        <DashboardHeader setSidebar={setSidebar} />
        <main className="py-5">
          <Outlet />
        </main>
      </div>
    </section>
  );
}
