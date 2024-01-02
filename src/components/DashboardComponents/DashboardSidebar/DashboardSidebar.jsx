import { BsCart4 } from "react-icons/bs";
import { FaBlogger, FaRegHandshake, FaUsers } from "react-icons/fa";
import {
  MdHomeRepairService,
  MdMonitor,
  MdOutlineDashboard,
} from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import SidebarItems from "./SidebarItems";

const adminSidebarItems = [
  {
    icon: <MdOutlineDashboard />,
    title: "Dashbaord",
    path: "/admin/dashboard",
  },
  {
    icon: <BsCart4 />,
    title: "Products",
    subMenu: [
      {
        title: "Products",
        path: "/admin/products/all-products",
      },
    ],
  },
  {
    icon: <BsCart4 />,
    title: "Categories",
    subMenu: [
      {
        title: "Categories",
        path: "/admin/categories/categories",
      },
      {
        title: "Sub Categories",
        path: "/admin/categories/sub-categories",
      },
      {
        title: "Sub Sub Categories",
        path: "/admin/categories/sub-sub-categories",
      },
    ],
  },
  {
    icon: <FaBlogger />,
    title: "News & Events",
    subMenu: [
      {
        title: "All News & Events",
        path: "/admin/news-events/all-news-events",
      },
      {
        title: "News Category",
        path: "/admin/news-events/news-category",
      },
    ],
  },
  {
    icon: <FaRegHandshake />,
    title: "Impacts",
    subMenu: [
      {
        title: "All Impacts",
        path: "/admin/impacts/all-impacts",
      },
      {
        title: "Impacts Section",
        path: "/admin/impacts/impact-section",
      },
    ],
  },
  {
    icon: <MdHomeRepairService />,
    title: "Career",
    subMenu: [
      {
        title: "Career Banner Setting",
        path: "/admin/career/banner",
      },
      {
        title: "Career Forms",
        path: "/admin/career/career-forms",
      },
    ],
  },
  {
    icon: <FaUsers />,
    title: "Clients",
    subMenu: [
      {
        title: "Client Banner",
        path: "/admin/clients/client-banner",
      },
      {
        title: "All Clients",
        path: "/admin/clients/all-clients",
      },
    ],
  },
  {
    icon: <RiAdminFill />,
    title: "Administrator",
    subMenu: [
      {
        title: "All Administrator",
        path: "/admin/administrator/all-administrator",
      },
    ],
  },
  {
    icon: <MdMonitor />,
    title: "About Us",
    subMenu: [
      {
        title: "About Us",
        path: "/admin/about-us/details",
      },
      {
        title: "Company Profile",
        path: "/admin/about-us/company-profile",
      },
      {
        title: "Our Mission",
        path: "/admin/about-us/our-mission",
      },
      {
        title: "Our Vision",
        path: "/admin/about-us/our-vision",
      },
      {
        title: "Our Team",
        path: "/admin/about-us/our-team",
      },
    ],
  },
  {
    icon: <MdMonitor />,
    title: "Front-End Setting",
    subMenu: [
      {
        title: "Logo",
        path: "/admin/front-end/logo",
      },
      {
        title: "Banner",
        path: "/admin/front-end/banner",
      },
      {
        title: "Contact Us",
        path: "/admin/front-end/contact-us",
      },
    ],
  },
];

export default function DashboardSidebar() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <nav className="admin_siderbar">
          <ul>
            {adminSidebarItems?.map((item, i) => (
              <SidebarItems key={i} item={item} />
            ))}
          </ul>
        </nav>
      </div>

      <div className="bg-[#445360] p-2 flex justify-between items-center font-light">
        <p>Visit Front-End</p>
        <Link to="/" target="_blank" className="text-primary hover:underline">
          eManager
        </Link>
      </div>
    </div>
  );
}
