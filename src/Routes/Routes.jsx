import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AboutUs from "../pages/AboutUs/AboutUs";
import AreaOperation from "../pages/AboutUs/AreaOperation";
import CompanyProfile from "../pages/AboutUs/CompanyProfile";
import Manpower from "../pages/AboutUs/Manpower";
import MissionVision from "../pages/AboutUs/MissionVision";
import PurposeService from "../pages/AboutUs/PurposeService";
import Testimonials from "../pages/AboutUs/Testimonials";
import Home from "../pages/Home/Home";

import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";

import DashboardLayout from "../Layout/DashboardLAyout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../admin/Dashboard/Dashboard";

import OurTeam from "../pages/AboutUs/OurTeam";
import Career from "../pages/Career/Career";
import Clients from "../pages/Clients/Clients";
import About from "../pages/Dashboard/AboutUs/AboutUs";
import AddBanner from "../pages/Dashboard/Banner/AddBanner";
import Banners from "../pages/Dashboard/Banner/Banner";
import CareerBanner from "../pages/Dashboard/Career/CareerBanner/CareerBanner";
import AddCategories from "../pages/Dashboard/Categories/AddCategories";
import Categories from "../pages/Dashboard/Categories/Categories";
import EditCategories from "../pages/Dashboard/Categories/EditCategories";
import Advertisement from "../pages/NewsEvents/category/Advertisement";
import CSR from "../pages/NewsEvents/category/CSR";
import CorporateNews from "../pages/NewsEvents/category/CorporateNews";
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
        path: "/admin/categories/all-categories",
        element: <Categories />,
      },
      {
        path: "/admin/categories/add-category",
        element: <AddCategories />,
      },
      {
        path: "/admin/categories/edit-category/:id",
        element: <EditCategories />,
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
