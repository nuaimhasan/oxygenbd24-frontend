import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AdminHeader from "../components/AdminComponents/AdminHeader/AdminHeader";
import { useEffect } from "react";

export default function AdminLayout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === "/admin") {
      navigate("/admin/dashboard");
    }
  }, [pathname, navigate]);

  return (
    <>
      <AdminHeader />
      <div className="min-h-[70vh]">
        <Outlet />
      </div>
    </>
  );
}
