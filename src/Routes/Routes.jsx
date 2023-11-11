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
import Login from "../pages/Login/Login";

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../Layout/DashboardLAyout";
import Dashboard from "../admin/Dashboard/Dashboard";
import UserLists from "../Admin/User/UserLists";
import EditUser from "../Admin/User/EditUser";
import TeamLists from "../Admin/Team/TeamLists";
import EditTeam from "../Admin/Team/EditTeam";
import AlliancesLists from "../Admin/Alliances/AlliancesLists";

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
    ],
  },
]);
