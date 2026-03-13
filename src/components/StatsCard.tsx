import type { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  testId?: string;
}

export default function StatsCard({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  testId,
}: StatsCardProps) {
  const changeColor =
    changeType === "positive"
      ? "text-green-600 bg-green-50"
      : changeType === "negative"
        ? "text-red-600 bg-red-50"
        : "text-gray-600 bg-gray-100";

  return (
    <div
      data-testid={testId}
      className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-gray-500">{title}</span>
        <div className="p-2 bg-indigo-50 rounded-lg">
          <Icon size={20} className="text-indigo-600" />
        </div>
      </div>

      <div className="flex items-end gap-3">
        <span
          data-testid={testId ? `${testId}-value` : undefined}
          className="text-2xl font-bold text-gray-900"
        >
          {value}
        </span>
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full ${changeColor}`}
        >
          {change}
        </span>
      </div>
    </div>
  );
}
