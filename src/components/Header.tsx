import { Bell } from "lucide-react";

export default function Header() {
  return (
    <header
      data-testid="header"
      className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8"
    >
      <h2 className="text-lg font-semibold text-gray-800">
        Good morning, <span data-testid="user-greeting">Alex</span>
      </h2>

      <div className="flex items-center gap-4">
        <button
          data-testid="notifications-btn"
          className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Notifications"
        >
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div
          data-testid="user-avatar"
          className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold text-sm"
        >
          A
        </div>
      </div>
    </header>
  );
}
