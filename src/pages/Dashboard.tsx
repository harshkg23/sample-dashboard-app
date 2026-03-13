import { Users, DollarSign, Activity, TrendingUp } from "lucide-react";
import StatsCard from "../components/StatsCard";
import ProfileCard from "../components/ProfileCard";

const stats = [
  {
    title: "Total Users",
    value: "2,847",
    change: "+12.5%",
    changeType: "positive" as const,
    icon: Users,
    testId: "total-users",
  },
  {
    title: "Revenue",
    value: "$48,250",
    change: "+8.2%",
    changeType: "positive" as const,
    icon: DollarSign,
    testId: "revenue",
  },
  {
    title: "Active Sessions",
    // BUG: Session count should never be negative
    value: -42,
    change: "-100%",
    changeType: "negative" as const,
    icon: Activity,
    testId: "active-sessions",
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: "+0.8%",
    changeType: "positive" as const,
    icon: TrendingUp,
    testId: "conversion-rate",
  },
];

export default function Dashboard() {
  return (
    <div data-testid="dashboard-page">
      {/* BUG: Heading says "Welcome to your dashboard" instead of "Dashboard Overview" */}
      <h1
        data-testid="dashboard-title"
        className="text-2xl font-bold text-gray-900 mb-6"
      >
        Welcome to the Admin Panel
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <StatsCard key={stat.testId} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <h2
            data-testid="recent-activity-title"
            className="text-lg font-semibold text-gray-900 mb-4"
          >
            Recent Activity
          </h2>
          <div className="space-y-4">
            {[
              { user: "Sarah Chen", action: "completed onboarding", time: "2 min ago" },
              { user: "James Wilson", action: "upgraded to Pro plan", time: "15 min ago" },
              { user: "Maria Garcia", action: "submitted a support ticket", time: "1 hr ago" },
              { user: "David Kim", action: "exported analytics report", time: "3 hrs ago" },
            ].map((item, i) => (
              <div
                key={i}
                data-testid={`activity-item-${i}`}
                className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-semibold">
                    {item.user.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-900">
                      {item.user}
                    </span>{" "}
                    <span className="text-sm text-gray-500">{item.action}</span>
                  </div>
                </div>
                <span className="text-xs text-gray-400">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        <ProfileCard />
      </div>
    </div>
  );
}
