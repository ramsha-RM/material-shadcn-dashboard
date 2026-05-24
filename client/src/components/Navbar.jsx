import { useState, useEffect, useRef } from "react";
import "../style/Navbar.css";
import { IoIosSearch } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = ({ onMenuClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const accountRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (accountRef.current && !accountRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="search-bar">
          <IoIosSearch className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
        <div className="account-box" ref={accountRef}>
          <FiMenu
            className="account-icon mobile-menu-icon"
            onClick={onMenuClick}
            role="button"
            tabIndex={0}
            aria-label="Open sidebar menu"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onMenuClick();
              }
            }}
          />

          <div className="account">
            <div className="user">
              <LuUser className="user-icon" />
            </div>

            <span className="account-text">Account</span>

            <IoIosArrowDown
              className="arrow-icon"
              onClick={() => setMenuOpen((open) => !open)}
              role="button"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close account menu" : "Open account menu"}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setMenuOpen((open) => !open);
                }
              }}
            />
          </div>

          {menuOpen && (
            <div className="account-dropdown">
              <div className="dropdown-user">
                <strong>John Doe</strong>
                <span>john@example.com</span>
              </div>
              <a href="#" className="dropdown-item">
                Billing
              </a>
              <a href="#" className="dropdown-item dropdown-logout">
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
