import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";

const ProductDetails = lazy(() =>
  import("../pages/ProductDetails/ProductDetails")
);
const Checkout = lazy(() => import("../pages/Checkout/Checkout"));
const RentCheckout = lazy(() => import("../pages/Checkout/RentCheckout"));
const Login = lazy(() => import("../pages/Login/Login"));

// -------------------------------------Dashboard---------------------------------------------------------

const AdminRoute = lazy(() => import("../AdminRoute/AdminRoute"));
const AdminLayout = lazy(() => import("../Layout/AdminLayout"));

const Dashboard = lazy(() => import("../pages/Admin/Dashboard/Dashboard"));

const Orders = lazy(() => import("../pages/Admin/Orders/Orders"));
const OrderDetails = lazy(() =>
  import("../pages/Admin/OrderDetails/OrderDetails")
);
const OrderPrint = lazy(() => import("../pages/Admin/OrderPrint/OrderPrint"));

const Rentorders = lazy(() => import("../pages/Admin/Orders/Rentorders"));
const RentOrderDetails = lazy(() =>
  import("../pages/Admin/RentOrderDetails/RentOrderDetails")
);
// import RentOrderDetails from "../pages/Admin/RentOrderDetails/RentOrderDetails";
// import Rentorders from "../pages/Admin/Orders/RentOrders";

// import Orders from "../pages/Admin/Orders/Orders";
// import AdminRoute from "../AdminRoute/AdminRoute";
// import OrderDetails from "../pages/Admin/OrderDetails/OrderDetails";

const Logo = lazy(() => import("../pages/Admin/FrontEndSetting/Logo/Logo"));
const Favicon = lazy(() =>
  import("../pages/Admin/FrontEndSetting/Favicon/Favicon")
);
const Banner = lazy(() =>
  import("../pages/Admin/FrontEndSetting/Banner/Banner")
);
const Themes = lazy(() =>
  import("../pages/Admin/FrontEndSetting/Theme/Themes")
);

const About = lazy(() => import("../pages/Admin/GeneralSetting/About/About"));
const ContactUs = lazy(() =>
  import("../pages/Admin/GeneralSetting/ContactUs/ContactUs")
);
const SEO = lazy(() => import("../pages/Admin/GeneralSetting/SEO/SEO"));

// import OrderPrint from "../pages/Admin/OrderPrint/OrderPrint";
// import Logo from "../pages/Admin/FrontEndSetting/Logo/Logo";
// import Favicon from "../pages/Admin/FrontEndSetting/Favicon/Favicon";
// import Banner from "../pages/Admin/FrontEndSetting/Banner/Banner";

// import About from "../pages/Admin/GeneralSetting/About/About";
// import ContactUs from "../pages/Admin/GeneralSetting/ContactUs/ContactUs";
// import SEO from "../pages/Admin/GeneralSetting/SEO/SEO";

const Administrator = lazy(() =>
  import("../pages/Admin/Administrator/Administrator")
);
const AddAdministrator = lazy(() =>
  import("../pages/Admin/Administrator/AddAdministrator")
);
const EditAdministrator = lazy(() =>
  import("../pages/Admin/Administrator/EditAdministrator")
);

// import Administrator from "../pages/Admin/Administrator/Administrator";
// import AddAdministrator from "../pages/Admin/Administrator/AddAdministrator";
// import EditAdministrator from "../pages/Admin/Administrator/EditAdministrator";

const ProductsList = lazy(() => import("../pages/Admin/Product/ProductsList"));
const AddProduct = lazy(() => import("../pages/Admin/Product/AddProduct"));
const EditProduct = lazy(() => import("../pages/Admin/Product/EditProduct"));

// import ProductsList from "../pages/Admin/Product/ProductsList";
// import AddProduct from "../pages/Admin/Product/AddProduct";
// import EditProduct from "../pages/Admin/Product/EditProduct";

const RentalLists = lazy(() => import("../pages/Admin/Rental/RentalLists"));
const AddRent = lazy(() => import("../pages/Admin/Rental/AddRent"));
const EditRent = lazy(() => import("../pages/Admin/Rental/EditRent"));

// import RentalLists from "../pages/Admin/Rental/RentalLists";
// import AddRent from "../pages/Admin/Rental/AddRent";
// import EditRent from "../pages/Admin/Rental/EditRent";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/checkout/:id",
        element: <Checkout />,
      },
      {
        path: "/rent/checkout/:id",
        element: <RentCheckout />,
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
      {
        path: "/admin/rent-orders",
        element: <Rentorders />,
      },
      {
        path: "/admin/rent/:id",
        element: <RentOrderDetails />,
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
      {
        path: "/admin/frontend-setting/theme",
        element: <Themes />,
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
