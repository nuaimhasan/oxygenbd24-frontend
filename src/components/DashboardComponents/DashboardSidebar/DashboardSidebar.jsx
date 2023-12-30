import { BsCart4 } from "react-icons/bs";
import { FaBlogger, FaRegHandshake, FaUsers } from "react-icons/fa";
import {
  MdHomeRepairService,
  MdMonitor,
  MdOutlineDashboard,
} from "react-icons/md";
import { RiAdminFill, RiTeamFill } from "react-icons/ri";
import { TbBrandDaysCounter } from "react-icons/tb";
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
    title: "Services",
    subMenu: [
      {
        title: "Add Service",
        path: "/admin/services/add-service",
      },
      {
        title: "All Services",
        path: "/admin/services/all-services",
      },
      {
        title: "Service Banner Setting",
        path: "/admin/services/banner",
      },
      {
        title: "Service Section Setting",
        path: "/admin/services/section-setting",
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
    icon: <TbBrandDaysCounter />,
    title: "Counter Area",
    subMenu: [
      {
        title: "Counter Area Lists",
        path: "/admin/counter",
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
        title: "Career Benefits Setting",
        path: "/admin/career/benefits",
      },
      {
        title: "Jobs",
        path: "/admin/career/jobs",
      },
      {
        title: "Applicants List",
        path: "/admin/career/all-applicants",
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
