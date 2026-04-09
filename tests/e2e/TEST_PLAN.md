# TollGate — Auto-Generated Test Plan

> Generated on 2026-04-09T00:17:53.714Z

## Scenario: Verify Dashboard Page Heading

1. Navigate to "/dashboard"
2. Assert page contains "Dashboard Overview"

## Scenario: Verify Active Sessions Value

1. Navigate to "/dashboard"
2. Assert page contains "Active Sessions"
3. Assert page contains "1,240"

## Scenario: Verify Recent Activity Title TestID

1. Navigate to "/dashboard"
2. Assert page contains "Recent Activity"
3. Assert element with testid "recent-activity-title" exists

## Scenario: Verify Header User Greeting

1. Navigate to "/"
2. Assert page contains "Good morning, Alex"

## Scenario: Verify Dashboard Announcement TestID

1. Navigate to "/dashboard"
2. Assert element with testid "dashboard-announcement" does not exist (since it should not be rendered without a query string)
