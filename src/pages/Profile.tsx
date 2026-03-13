import { Mail, MapPin, Briefcase, Calendar } from "lucide-react";

export default function Profile() {
  return (
    <div data-testid="profile-page">
      <h1
        data-testid="profile-page-title"
        className="text-2xl font-bold text-gray-900 mb-6"
      >
        Profile
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-8 flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-3xl font-bold mb-4">
            A
          </div>
          <h2
            data-testid="profile-full-name"
            className="text-xl font-bold text-gray-900"
          >
            Alex Johnson
          </h2>
          <p className="text-gray-500 mb-6">Senior Developer</p>
          <button
            data-testid="profile-edit-btn"
            className="py-2 px-6 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Edit Profile
          </button>
        </div>

        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Mail, label: "Email", value: "alex.johnson@company.com", tid: "info-email" },
              { icon: MapPin, label: "Location", value: "San Francisco, CA", tid: "info-location" },
              { icon: Briefcase, label: "Department", value: "Engineering", tid: "info-department" },
              { icon: Calendar, label: "Joined", value: "March 2023", tid: "info-joined" },
            ].map(({ icon: Icon, label, value, tid }) => (
              <div key={tid} data-testid={tid} className="flex items-start gap-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Icon size={16} className="text-gray-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                  <p className="text-sm font-medium text-gray-900">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
