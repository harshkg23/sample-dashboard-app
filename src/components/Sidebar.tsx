import { NavLink } from "react-router-dom";
import { LayoutDashboard, User, Settings } from "lucide-react";

const links = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/profile", label: "Profile", icon: User },
  { to: "/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside
      data-testid="sidebar"
      className="fixed left-0 top-0 h-screen w-60 bg-gray-900 text-gray-100 flex flex-col"
    >
      <div className="flex items-center gap-2 px-6 py-5 border-b border-gray-800">
        <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-sm font-bold">
          S
        </div>
        <span className="text-lg font-semibold tracking-tight">SentinelQA</span>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            data-testid={`nav-${label.toLowerCase()}`}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-indigo-600 text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="px-4 py-4 border-t border-gray-800 text-xs text-gray-500">
        v1.0.0
      </div>
    </aside>
  );
}
