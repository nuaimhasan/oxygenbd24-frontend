import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import CompanyProfile from "../pages/AboutUs/CompanyProfile";
import MissionVision from "../pages/AboutUs/MissionVision";
import PurposeService from "../pages/AboutUs/PurposeService";
import Testimonials from "../pages/AboutUs/Testimonials";
import Manpower from "../pages/AboutUs/Manpower";
import AreaOperation from "../pages/AboutUs/AreaOperation";

import OffGrid from "../pages/BusinessUnits/OffGrid/OffGrid";
import OnGrid from "../pages/BusinessUnits/OnGrid/OnGrid";
import Hybrid from "../pages/BusinessUnits/Hybrid/Hybrid";

import Products from "../pages/Products/Products";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";

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

import Clients from "../pages/Clients/Clients";
import Career from "../pages/Career/Career";
import OurTeam from "../pages/AboutUs/OurTeam";
import Advertisement from "../pages/NewsEvents/category/Advertisement";
import CorporateNews from "../pages/NewsEvents/category/CorporateNews";
import CSR from "../pages/NewsEvents/category/CSR";
import Events from "../pages/NewsEvents/category/Events";

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
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:category",
        element: <Products />,
      },
      {
        path: "/products/:category/:subCategory",
        element: <Products />,
      },
      {
        path: "/business-units/off-grid",
        element: <OffGrid />,
      },
      {
        path: "/business-units/on-grid",
        element: <OnGrid />,
      },
      {
        path: "/business-units/hybrid",
        element: <Hybrid />,
      },
      {
        path: "/clients",
        element: <Clients />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/news-events/advertisement",
        element: <Advertisement />,
      },
      {
        path: "/news-events/corporate-news",
        element: <CorporateNews />,
      },
      {
        path: "/news-events/csr",
        element: <CSR />,
      },
      {
        path: "/news-events/events",
        element: <Events />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/about-us/company-profile",
        element: <CompanyProfile />,
      },
      {
        path: "/about-us/mission-vision",
        element: <MissionVision />,
      },
      {
        path: "/about-us/purpose-service",
        element: <PurposeService />,
      },
      {
        path: "/about-us/testimonials",
        element: <Testimonials />,
      },
      {
        path: "/about-us/manpower",
        element: <Manpower />,
      },
      {
        path: "/about-us/area-operation",
        element: <AreaOperation />,
      },
      {
        path: "/about-us/our-team",
        element: <OurTeam />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
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
