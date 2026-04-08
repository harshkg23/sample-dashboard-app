# TollGate — Auto-Generated Test Plan

> Generated on 2026-04-08T23:42:03.002Z

## Scenario: Verify Dashboard Page Title
1. Navigate to "/dashboard"
2. Assert page contains "Dashboard Overview"

## Scenario: Verify Recent Activity Title
1. Navigate to "/dashboard"
2. Assert page contains "Recent Activity"

## Scenario: Verify User Greeting in Header
1. Navigate to "/dashboard"
2. Assert page contains "Good morning, Alex"

## Scenario: Verify Dashboard Announcement Test ID
1. Navigate to "/dashboard"
2. Assert page contains element with data-testid "recent-activity-title" exists

## Scenario: Verify Active Sessions Value
1. Navigate to "/dashboard"
2. Assert page contains "Active Sessions"
3. Assert page contains value "-42"
