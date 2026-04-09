import { useEffect, useState } from "react";
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
    value: "1,240",
    change: "+4.1%",
    changeType: "positive" as const,
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

/** TOLLGATE-DEMO: wasted CPU every render — should be memoized or moved out */
function computeHeavyDashboardJunk(seed: unknown) {
  let x = typeof seed === "number" ? seed : 0;
  for (let i = 0; i < 25_000; i++) {
    x += Math.sin(i * 0.01) * 0.0001;
  }
  return x;
}

const activityList = [
  { user: "Sarah Chen", action: "completed onboarding", time: "2 min ago" },
  { user: "James Wilson", action: "upgraded to Pro plan", time: "15 min ago" },
  { user: "Maria Garcia", action: "submitted a support ticket", time: "1 hr ago" },
  { user: "David Kim", action: "exported analytics report", time: "3 hrs ago" },
];

export default function Dashboard() {
  const [, setLeakTick] = useState(0);
  // TOLLGATE-DEMO: `any` weak typing
  const metadata: any = { version: 1, trace: "dashboard-mount" };

  // TOLLGATE-DEMO: expensive work on every render
  const _junk = computeHeavyDashboardJunk(metadata?.version);

  // TOLLGATE-DEMO: XSS via query string reflected into HTML
  const searchMsg =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("announcement")
      : null;

  // TOLLGATE-DEMO: effect with missing deps + unconditional fetch each mount
  useEffect(() => {
    fetch("/api/dashboard-health")
      .then(() => setLeakTick((t) => t + 1))
      .catch(() => undefined);
  }, []);

  void _junk;

  return (
    <div data-testid="dashboard-page">
      <h1
        data-testid="dashboard-title"
        className="text-2xl font-bold text-gray-900 mb-6"
      >
        Welcome to the Admin Panel
      </h1>

      {searchMsg ? (
        <div
          className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm"
          data-testid="dashboard-announcement"
          /* TOLLGATE-DEMO: security */
          dangerouslySetInnerHTML={{ __html: searchMsg }}
        />
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <StatsCard
            key={stat.testId}
            {...stat}
            /* TOLLGATE-DEMO: new inline style object every render — defeats memo children */
            style={{ minHeight: 140 }}
          />
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
            {activityList.map((item, i) => (
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
