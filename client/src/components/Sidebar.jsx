import "../style/Sidebar.css";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { FaBuilding } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { AiOutlineFileText } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const menuItems = [
  { path: "/", name: "Dashboard", icon: <MdOutlineDashboard /> },
  { path: "/contact", name: "Contacts", icon: <LuUsers /> },
  { path: "/companies", name: "Companies", icon: <FaBuilding /> },
  { path: "/deals", name: "Deals", icon: <HiOutlineDocumentReport /> },
  { path: "/tasks", name: "Tasks", icon: <AiOutlineFileText /> },
  { path: "/reports", name: "Reports", icon: <HiOutlineDocumentReport /> },
  { path: "/billing", name: "Billing", icon: <AiOutlineFileText /> },
  { path: "/settings", name: "Settings", icon: <AiOutlineSetting /> },
  { path: "/docs", name: "Docs", icon: <AiOutlineFileText /> }
];
const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const collapsed = isCollapsed;

  const handleBackdropClick = () => {
    setIsCollapsed(true);
  };

  const handleToggle = () => {
    setIsCollapsed(!collapsed);
  };

  return (
    <>
      {!collapsed && <div className="sidebar-backdrop" onClick={handleBackdropClick} />}
      <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <div className="heading">
          <p className="title">Material Shadcn Vue</p>
          <IoIosArrowBack
            className="arrow"
            onClick={handleToggle}
            role="button"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleToggle(); }}
          />
        </div>
        <hr />
        <div className="sidebar-content">
          {menuItems.map((item) => (
            <NavLink to={item.path} key={item.path} title={item.name} className={({ isActive }) => (isActive ? "active" : "")}>
              {item.icon}
              <span className="label">{item.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;