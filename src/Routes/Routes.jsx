import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import AdminLayout from "../Layout/AdminLayout";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";

import Login from "../pages/Login/Login";
import Orders from "../pages/Admin/Orders/Orders";
import AdminRoute from "../AdminRoute/AdminRoute";
import OrderDetails from "../pages/Admin/OrderDetails/OrderDetails";
import OrderPrint from "../pages/Admin/OrderPrint/OrderPrint";
import Logo from "../pages/Admin/FrontEndSetting/Logo/Logo";
import Favicon from "../pages/Admin/FrontEndSetting/Favicon/Favicon";
import Banner from "../pages/Admin/FrontEndSetting/Banner/Banner";
import About from "../pages/Admin/GeneralSetting/About/About";
import ContactUs from "../pages/Admin/GeneralSetting/ContactUs/ContactUs";
import SEO from "../pages/Admin/GeneralSetting/SEO/SEO";
import Administrator from "../pages/Admin/Administrator/Administrator";
import AddAdministrator from "../pages/Admin/Administrator/AddAdministrator";
import EditAdministrator from "../pages/Admin/Administrator/EditAdministrator";
import ProductsList from "../pages/Admin/Product/ProductsList";
import AddProduct from "../pages/Admin/Product/AddProduct";
import EditProduct from "../pages/Admin/Product/EditProduct";
import RentalLists from "../pages/Admin/Rental/RentalLists";
import AddRent from "../pages/Admin/Rental/AddRent";
import EditRent from "../pages/Admin/Rental/EditRent";

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
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },

      // Products
      {
        path: "/admin/products",
        element: <ProductsList />,
      },
      {
        path: "/admin/product/add",
        element: <AddProduct />,
      },
      {
        path: "/admin/product/edit/:id",
        element: <EditProduct />,
      },

      // Rental
      {
        path: "/admin/rental/all",
        element: <RentalLists />,
      },
      {
        path: "/admin/rent/add",
        element: <AddRent />,
      },
      {
        path: "/admin/rent/edit/:id",
        element: <EditRent />,
      },

      // Orders
      {
        path: "/admin/orders",
        element: <Orders />,
      },
      {
        path: "/admin/order/:id",
        element: <OrderDetails />,
      },

      // Administrator Setting
      {
        path: "/admin/administrator",
        element: <Administrator />,
      },
      {
        path: "/admin/administrator/add",
        element: <AddAdministrator />,
      },
      {
        path: "/admin/administrator/edit/:id",
        element: <EditAdministrator />,
      },

      // Front-End Setting
      {
        path: "/admin/frontend-setting/logo",
        element: <Logo />,
      },
      {
        path: "/admin/frontend-setting/favicon",
        element: <Favicon />,
      },
      {
        path: "/admin/frontend-setting/banner",
        element: <Banner />,
      },

      // General Setting
      {
        path: "/admin/general-setting/about",
        element: <About />,
      },
      {
        path: "/admin/general-setting/contact",
        element: <ContactUs />,
      },
      {
        path: "/admin/general-setting/seo",
        element: <SEO />,
      },
    ],
  },

  {
    path: "/admin/order/print/:id",
    element: <OrderPrint />,
  },
]);
