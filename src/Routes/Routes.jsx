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

import Products from "../pages/Products/Products";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../Layout/DashboardLAyout";
import Dashboard from "../admin/Dashboard/Dashboard";

import Clients from "../pages/Clients/Clients";
import Career from "../pages/Career/Career";
import OurTeam from "../pages/AboutUs/OurTeam";
import Advertisement from "../pages/NewsEvents/category/Advertisement";
import CorporateNews from "../pages/NewsEvents/category/CorporateNews";
import CSR from "../pages/NewsEvents/category/CSR";
import Events from "../pages/NewsEvents/category/Events";
import About from "../pages/Dashboard/AboutUs/AboutUs";
import Banners from "../pages/Dashboard/Banner/Banner";
import AddBanner from "../pages/Dashboard/Banner/AddBanner";
import CareerBanner from "../pages/Dashboard/Career/CareerBanner/CareerBanner";

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
        path: "/products/:category/:subCategory/:subSubCategory",
        element: <Products />,
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
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/career/banner",
        element: <CareerBanner />,
      },
      {
        path: "/admin/front-end/about-us",
        element: <About />,
      },
      {
        path: "/admin/front-end/banner",
        element: <Banners />,
      },
      {
        path: "/admin/front-end/banner/add-banner",
        element: <AddBanner />,
      },
    ],
  },
]);
