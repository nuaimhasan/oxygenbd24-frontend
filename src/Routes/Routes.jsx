import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Factory from "../pages/Factory/Factory";
import Uddom from "../pages/Uddom/Uddom";
import Emobility from "../pages/Emobility/Emobility";
import DRESolutions from "../pages/DRESolutions/DRESolutions";
import AboutUs from "../pages/AboutUs/AboutUs";
import RooftopESS from "../pages/RooftopESS/RooftopESS";
import SolarCleantechSolutions from "../pages/SolarCleantechSolutions/SolarCleantechSolutions";

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
        path: "/solar-and-cleantech-solutions",
        element: <SolarCleantechSolutions />,
      },
      {
        path: "/dre-solutions",
        element: <DRESolutions />,
      },
      {
        path: "/rooftop-and-ess",
        element: <RooftopESS />,
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
        path: "/our-factory",
        element: <Factory />,
      },
      {
        path: "/uddom",
        element: <Uddom />,
      },
      {
        path: "/e-mobility",
        element: <Emobility />,
      },
    ],
  },
]);
