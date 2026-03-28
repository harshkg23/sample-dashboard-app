# SentinelQA — Auto-Generated Test Plan

> Generated on 2026-03-13T21:17:16.205Z

## Scenario: Dashboard loads successfully
1. Navigate to /dashboard
2. Assert page contains "Welcome to your dashboard"
3. Assert page contains "Recent Activity"
4. Assert page contains "Settings"

## Scenario: User can log out
1. Navigate to /dashboard
2. Click "Logout"
3. Assert page contains "You have been logged out"
4. Assert page contains "Sign in"
