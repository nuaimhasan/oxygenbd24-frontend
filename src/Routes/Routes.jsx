import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import AboutUs from "../pages/AboutUs/AboutUs";
import SolarSolutions from "../pages/SolarSolutions/SolarSolutions";
import Login from "../pages/Login/Login";
import OffGridSolutions from "../pages/OffGridSolutions/OffGridSolutions";
import OnGridSolutions from "../pages/OnGridSolutions/OnGridSolutions";

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../Layout/DashboardLAyout";
import Dashboard from "../admin/Dashboard/Dashboard";
import UserLists from "../Admin/User/UserLists";
import EditUser from "../Admin/User/EditUser";
import TeamLists from "../Admin/Team/TeamLists";
import EditTeam from "../Admin/Team/EditTeam";
import AlliancesLists from "../Admin/Alliances/AlliancesLists";
import BannerLists from "../Admin/Banner/BannerLists";
import EditBanner from "../Admin/Banner/EditBanner";
import ProductLists from "../Admin/Products/ProductLists";

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
        path: "/solar-solutions",
        element: <SolarSolutions />,
      },
      {
        path: "/off-grid-solutions",
        element: <OffGridSolutions />,
      },
      {
        path: "/on-grid-solutions",
        element: <OnGridSolutions />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/user/user-lists",
        element: <UserLists />,
      },
      {
        path: "/admin/user/edit-user/:id",
        element: <EditUser />,
      },
      {
        path: "/admin/team/team-lists",
        element: <TeamLists />,
      },
      {
        path: "/admin/team/edit-team/:id",
        element: <EditTeam />,
      },
      {
        path: "/admin/alliances/alliances-lists",
        element: <AlliancesLists />,
      },
      {
        path: "/admin/banner/banner-lists",
        element: <BannerLists />,
      },
      {
        path: "/admin/banner/edit-banner/:id",
        element: <EditBanner />,
      },
      {
        path: "/admin/product/product-lists",
        element: <ProductLists />,
      },
    ],
  },
]);
