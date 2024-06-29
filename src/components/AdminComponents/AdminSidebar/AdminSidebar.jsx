import { Link } from "react-router-dom";
import {
  MdOutlineDashboard,
  MdHomeRepairService,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import SidebarItems from "./SidebarItems";
import { FiMonitor } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa";

const adminSidebarItems = [
  {
    icon: <MdOutlineDashboard />,
    title: "Dashbaord",
    path: "/admin/dashboard",
  },
  {
    icon: <MdProductionQuantityLimits />,
    title: "Products",
    path: "/admin/products",
  },
  {
    icon: <MdHomeRepairService />,
    title: "Rental",
    path: "/admin/rental/all",
  },
  {
    icon: <FaCartPlus />,
    title: "Orders",
    subMenu: [
      {
        title: "Orders",
        path: "/admin/orders",
      },
      {
        title: "Rent Orders",
        path: "/admin/rent-orders",
      },
    ],
  },
  {
    icon: <RiAdminFill />,
    title: "Administrator",
    path: "/admin/administrator",
  },
  {
    icon: <FiMonitor />,
    title: "Front-End Setting",
    subMenu: [
      {
        title: "Logo",
        path: "/admin/frontend-setting/logo",
      },
      {
        title: "Favicon",
        path: "/admin/frontend-setting/favicon",
      },
      {
        title: "Banner",
        path: "/admin/frontend-setting/banner",
      },
      {
        title: "Theme",
        path: "/admin/frontend-setting/theme",
      },
    ],
  },
  {
    icon: <IoMdSettings />,
    title: "General Setting",
    subMenu: [
      {
        title: "About",
        path: "/admin/general-setting/about",
      },
      {
        title: "Contact",
        path: "/admin/general-setting/contact",
      },
      {
        title: "SEO",
        path: "/admin/general-setting/seo",
      },
    ],
  },
];

export default function AdminSidebar() {
  return (
    <div>
      <nav className="admin_siderbar">
        <Link to="/admin/dashboard" className="py-5 block">
          <img
            src="/images/logo/logo.png"
            alt="logo"
            className="w-2/3 mx-auto"
          />
        </Link>

        <ul>
          {adminSidebarItems?.map((item, i) => (
            <SidebarItems key={i} item={item} />
          ))}
        </ul>
      </nav>
    </div>
  );
}
