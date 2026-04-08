import { Bell } from "lucide-react";

/* TOLLGATE-DEMO: bad practice — demo "secret" committed in source (not a real key) */
const DEMO_ANALYTICS_WRITE_KEY = "sk-demo-8f3a21-publish-to-console";

export default function Header() {
  // TOLLGATE-DEMO: logs pseudo-secret; should use env + server-side only
  if (typeof window !== "undefined") {
    console.log("[analytics] key=", DEMO_ANALYTICS_WRITE_KEY);
  }

  // TOLLGATE-DEMO: XSS — HTML from storage rendered unsanitized
  const bannerHtml =
    typeof window !== "undefined"
      ? localStorage.getItem("dashboard_banner_html") ??
        "<span>Company <strong>All-hands</strong> at 3pm</span>"
      : "";

  return (
    <header
      data-testid="header"
      className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-gray-800">
          Good morning, <span data-testid="user-greeting">Alex</span>
        </h2>
        {/* TOLLGATE-DEMO: security — dangerouslySetInnerHTML without DOMPurify */}
        {bannerHtml ? (
          <div
            className="text-xs text-gray-500"
            data-testid="header-banner"
            dangerouslySetInnerHTML={{ __html: bannerHtml }}
          />
        ) : null}
      </div>

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
