import { Mail, MapPin } from "lucide-react";

export default function ProfileCard() {
  return (
    <div
      data-testid="profile-card"
      className="bg-white rounded-xl border border-gray-200 p-6"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-xl font-bold mb-3">
          A
        </div>
        <h3
          data-testid="profile-name"
          className="text-lg font-semibold text-gray-900"
        >
          Alex Johnson
        </h3>
        <p
          data-testid="profile-role"
          className="text-sm text-gray-500 mb-4"
        >
          Senior Developer
        </p>

        <div className="w-full space-y-2 mb-5">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Mail size={14} />
            <span data-testid="profile-email">alex.johnson@company.com</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin size={14} />
            <span data-testid="profile-location">San Francisco, CA</span>
          </div>
        </div>

        {/* BUG: Button is hardcoded as disabled — should be clickable */}
        <button
          data-testid="edit-profile-btn"
          disabled={true}
          className="w-full py-2 px-4 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}
