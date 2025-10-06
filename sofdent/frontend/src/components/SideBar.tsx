import { useState } from "react";
import HomeIcon from "../assets/homeIcon.tsx";
import CalendarIcon from "../assets/calendarIcon.tsx";
import IdentificationIcon from "../assets/identificationIcon.tsx";
import ChartIcon from "../assets/chartIcon.tsx";
import PatientsIcon from "../assets/patientsIcon.tsx";
import MenuIcon from "../assets/menuIcon.tsx";
import PaymentIcon from "../assets/paymentIcon.tsx";
import { ColorTheme, getTheme } from "../config/themes";
import { SizeVariant, getSize } from "../config/sizes";

interface SideBarProps {
  className?: string;
  size?: SizeVariant;
  theme?: ColorTheme;
  defaultOpen?: boolean;
  showUserProfile?: boolean;
  brandName?: string;
  brandInitials?: string;
  onNavigate?: (page: string) => void;
  currentPage?: string;
  onLogout?: () => void;
}

function SideBar({
  className = "",
  size = "small",
  theme = "pink",
  defaultOpen = false,
  showUserProfile = true,
  brandName = "SofDent",
  brandInitials = "SD",
  onNavigate,
  currentPage = "Home",
  onLogout,
}: SideBarProps) {
  const [open, setOpen] = useState(defaultOpen);

  const items = [
    { icon: <HomeIcon />, label: "Home", href: "#home" },
    { icon: <PatientsIcon />, label: "Patients", href: "#patients" },
    { icon: <CalendarIcon />, label: "Calendar", href: "#calendar" },
    {
      icon: <IdentificationIcon />,
      label: "Staff",
      href: "#staff",
    },
    { icon: <PaymentIcon />, label: "Payment", href: "#payment" },
    { icon: <ChartIcon />, label: "Charts", href: "#charts" },
  ];

  const currentSize = getSize(size);
  const currentTheme = getTheme(theme);

  const handleItemClick = (label: string) => {
    if (onNavigate) {
      onNavigate(label);
    }
  };

  return (
    <aside
      className={`bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 
        h-screen flex flex-col transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden shadow-2xl
        border-r border-slate-200 dark:border-slate-700 backdrop-blur-sm
        ${open ? currentSize.open : currentSize.closed} ${className}`}
    >
      {/* Header with Logo and Menu Button */}
      <div
        className={`flex items-center justify-between ${currentSize.padding} border-b border-slate-200 dark:border-slate-700`}
      >
        {/* Menu Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className={`${currentSize.padding} rounded-xl ${currentTheme.hover} transition-colors duration-200 text-slate-800 dark:text-slate-200`}
          aria-label={open ? "Close sidebar" : "Open sidebar"}
        >
          <div
            className={`transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              open ? "rotate-180" : "rotate-0"
            }`}
          >
            <MenuIcon />
          </div>
        </button>

        {/* Logo/Brand */}
        <div
          className={`flex items-center gap-3 transition-all duration-500 ease-out transform ${
            open
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 -translate-x-4 scale-95 hidden"
          }`}
        >
          <div
            className={`${currentSize.logoSize} bg-gradient-to-br ${currentTheme.primary} rounded-xl flex items-center justify-center shadow-md`}
          >
            <span className={`text-white font-bold ${currentSize.logoText}`}>
              {brandInitials}
            </span>
          </div>
          <span
            className={`text-slate-800 dark:text-slate-200 font-semibold ${currentSize.logoText} tracking-wide`}
          >
            {brandName}
          </span>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className={`flex-grow ${currentSize.padding} py-6`}>
        <ul className="space-y-2">
          {items.map(({ icon, label, href }) => {
            const isActive = currentPage === label;
            return (
              <li key={label} className="relative">
                <a
                  href={href}
                  onClick={() => handleItemClick(label)}
                  className={`group flex items-center gap-4 ${
                    currentSize.itemPadding
                  } rounded-xl cursor-pointer 
                    transition-colors duration-200 relative
                    ${
                      isActive
                        ? `${currentTheme.active} text-white shadow-lg ${currentTheme.shadow}`
                        : `text-slate-600 dark:text-slate-300 ${currentTheme.hover} hover:text-slate-800 dark:hover:text-slate-200`
                    }`}
                >
                  {/* Icon */}
                  <span
                    className={`${
                      currentSize.iconSize
                    } transition-colors duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-slate-600 dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-100"
                    }`}
                  >
                    {icon}
                  </span>

                  {/* Label */}
                  <span
                    className={`font-medium ${
                      currentSize.textSize
                    } transition-all duration-500 ease-out whitespace-nowrap
                      ${
                        open
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-2 hidden"
                      }
                      ${isActive ? "text-white" : ""}`}
                  >
                    {label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer - User Profile */}
      {showUserProfile && (
        <div
          className={`${currentSize.padding} border-t border-slate-200 dark:border-slate-700`}
        >
          <div
            className={`transition-all duration-500 ease-out transform ${
              open
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95 hidden"
            }`}
          >
            <div
              className={`flex items-center gap-3 ${currentSize.padding} rounded-xl bg-slate-100 dark:bg-slate-800 shadow-sm transition-colors duration-200`}
            >
              <div
                className={`${currentSize.logoSize} bg-gradient-to-br ${currentTheme.accent} rounded-full flex items-center justify-center`}
              >
                <span
                  className={`text-white ${currentSize.logoText} font-semibold`}
                >
                  U
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className={`${currentSize.textSize} font-medium text-slate-800 dark:text-slate-200 truncate`}
                >
                  Admin User
                </p>
                <p
                  className={`text-xs text-slate-500 dark:text-slate-400 truncate`}
                >
                  admin@sofdent.com
                </p>
              </div>
              {onLogout && (
                <button
                  onClick={onLogout}
                  className={`${currentSize.padding} text-slate-500 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 transition-colors`}
                  title="Logout"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}

export default SideBar;
