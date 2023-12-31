import { BsCart4 } from "react-icons/bs";
import { FaBlogger, FaRegHandshake, FaUsers } from "react-icons/fa";
import {
  MdHomeRepairService,
  MdMonitor,
  MdOutlineDashboard,
} from "react-icons/md";
import { RiAdminFill, RiTeamFill } from "react-icons/ri";
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
        title: "Add Service",
        path: "/admin/services/add-service",
      },
    ],
  },
  {
    icon: <BsCart4 />,
    title: "Categories",
    subMenu: [
      {
        title: "All Categories",
        path: "/admin/categories/all-categories",
      },
      {
        title: "Add Category",
        path: "/admin/categories/add-category",
      },
      {
        title: "Add Sub Category",
        path: "/admin/categories/add-sub-category",
      },
      {
        title: "Add Sub Sub Category",
        path: "/admin/categories/add-sub-sub-category",
      },
    ],
  },
  {
    icon: <FaBlogger />,
    title: "Blogs",
    subMenu: [
      {
        title: "All Blogs",
        path: "/admin/blogs/all-blogs",
      },
      {
        title: "Blog Section Setting",
        path: "/admin/blogs/blog-section-setting",
      },
    ],
  },
  {
    icon: <FaRegHandshake />,
    title: "Why Choose",
    subMenu: [
      {
        title: "Why Choose Lists",
        path: "/admin/why-choose",
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
    ],
  },
  {
    icon: <FaUsers />,
    title: "Clients",
    subMenu: [
      {
        title: "All Clients",
        path: "/admin/clients/all-clients",
      },
    ],
  },
  {
    icon: <RiTeamFill />,
    title: "Teams",
    subMenu: [
      {
        title: "All Teams",
        path: "/admin/teams/all-teams",
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
    title: "Front-End Setting",
    subMenu: [
      {
        title: "Logo",
        path: "/admin/front-end/logo",
      },
      {
        title: "Menu",
        path: "/admin/front-end/menu",
      },
      {
        title: "Banner",
        path: "/admin/front-end/banner",
      },
      {
        title: "About Us",
        path: "/admin/front-end/about-us",
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
