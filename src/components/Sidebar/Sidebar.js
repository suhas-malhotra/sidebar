import React, { useState } from "react";
import "./Sidebar.css";
import { FaBars, FaRegListAlt } from "react-icons/fa";
import { IoUmbrellaOutline } from "react-icons/io5";
import { RiDashboardLine, RiLinksLine } from "react-icons/ri";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <RiDashboardLine />,
    },
    {
      path: "/link-exchange",
      name: "Link Exchange",
      icon: <RiLinksLine />,
    },
    {
      path: "/buy-cover",
      name: "Buy Cover",
      icon: <IoUmbrellaOutline />,
    },
    {
      path: "/all-covers",
      name: "All Covers",
      icon: <FaRegListAlt />,
    },
    {
      path: "/all-claims",
      name: "All Claims",
      icon: <AiOutlineDollarCircle />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "300px" : "100px" }} className="sidebar">
        {menuItem.map((item, index) => (
          <div style={{ marginTop: "30px" }}>
            <NavLink
              to={item.path}
              key={index}
              className="link"
              style={{
                marginLeft: isOpen ? "20px" : "0px",
                borderTopLeftRadius: isOpen ? "100px" : "0px",
                borderBottomLeftRadius: isOpen ? "100px" : "0px",
              }}
              activeclassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{
                  display: isOpen ? "block" : "none",
                  fontSize: isOpen ? "18px" : "0px",
                }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          </div>
        ))}
        <div className="bottom_section">
          <div
            style={{ marginLeft: isOpen ? "140px" : "70px" }}
            className="bars"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
