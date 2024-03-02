import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import AdminLayout from "../Layout/AdminLayout";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
// import AdminRoute from "../AdminRoute/AdminRoute";
import Login from "../pages/Login/Login";
import Orders from "../pages/Admin/Orders/Orders";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  {
    path: "/admin/login",
    element: <Login />,
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/orders",
        element: <Orders />,
      },
    ],
  },
]);
