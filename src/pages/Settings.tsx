import { useState } from "react";

interface ToggleProps {
  label: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
  testId: string;
}

function Toggle({ label, description, enabled, onToggle, testId }: ToggleProps) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
      <div>
        <p className="text-sm font-medium text-gray-900">{label}</p>
        <p className="text-xs text-gray-500 mt-0.5">{description}</p>
      </div>
      <button
        data-testid={testId}
        onClick={onToggle}
        role="switch"
        aria-checked={enabled}
        className={`relative w-11 h-6 rounded-full transition-colors ${
          enabled ? "bg-indigo-600" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
            enabled ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(false);
  const [analytics, setAnalytics] = useState(true);

  return (
    <div data-testid="settings-page">
      <h1
        data-testid="settings-title"
        className="text-2xl font-bold text-gray-900 mb-6"
      >
        Settings
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Appearance
          </h2>
          <Toggle
            label="Dark Mode"
            description="Switch between light and dark theme"
            enabled={darkMode}
            onToggle={() => setDarkMode(!darkMode)}
            testId="toggle-dark-mode"
          />
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Notifications
          </h2>
          <Toggle
            label="Email Notifications"
            description="Receive updates via email"
            enabled={emailNotifs}
            onToggle={() => setEmailNotifs(!emailNotifs)}
            testId="toggle-email-notifs"
          />
          <Toggle
            label="Push Notifications"
            description="Receive browser push notifications"
            enabled={pushNotifs}
            onToggle={() => setPushNotifs(!pushNotifs)}
            testId="toggle-push-notifs"
          />
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Privacy
          </h2>
          <Toggle
            label="Usage Analytics"
            description="Help improve the app by sharing anonymous usage data"
            enabled={analytics}
            onToggle={() => setAnalytics(!analytics)}
            testId="toggle-analytics"
          />
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Account
          </h2>
          <div className="space-y-3">
            <button
              data-testid="btn-change-password"
              className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Change Password
            </button>
            <button
              data-testid="btn-export-data"
              className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Export Data
            </button>
            <button
              data-testid="btn-delete-account"
              className="w-full text-left px-4 py-3 rounded-lg border border-red-200 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
