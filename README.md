# Sample Dashboard App

A React dashboard application built as a **target repository** for [SentinelQA](https://github.com/) — an autonomous AI-powered quality engineering pipeline.

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router v6
- Lucide React (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build
```

## Pages

| Route       | Page       | Description                                  |
| ----------- | ---------- | -------------------------------------------- |
| `/`         | Dashboard  | Stats cards, recent activity, profile widget |
| `/profile`  | Profile    | User profile with personal info              |
| `/settings` | Settings   | Theme, notifications, privacy toggles        |

## Data Test IDs

All interactive and important elements have `data-testid` attributes for reliable E2E testing:

- `dashboard-title` — main heading on the dashboard
- `total-users`, `revenue`, `active-sessions`, `conversion-rate` — stat cards
- `active-sessions-value` — the numeric value inside the Active Sessions card
- `profile-card`, `profile-name`, `edit-profile-btn` — profile widget
- `nav-dashboard`, `nav-profile`, `nav-settings` — sidebar navigation links
- `settings-title`, `toggle-dark-mode`, `toggle-email-notifs` — settings page

## Known Issues (for SentinelQA testing)

This app intentionally contains bugs that the SentinelQA pipeline should detect, test, and fix:

1. **Wrong dashboard heading** — `src/pages/Dashboard.tsx` displays "Welcome to the Admin Panel" instead of "Dashboard Overview"
2. **Disabled Edit Profile button** — `src/components/ProfileCard.tsx` has `disabled={true}` hardcoded on the Edit Profile button
3. **Negative session count** — `src/pages/Dashboard.tsx` shows `-42` for Active Sessions (should be a positive number)

## Connecting to SentinelQA

1. Push this folder to a new GitHub repository
2. Configure SentinelQA with the repo owner/name
3. Run the pipeline — it will generate tests, detect failures, and open a PR with fixes
