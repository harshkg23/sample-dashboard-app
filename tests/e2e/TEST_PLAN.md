# TollGate — Auto-Generated Test Plan

> Generated on 2026-04-08T23:36:40.317Z

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
2. Assert element with data-testid "dashboard-announcement" exists

## Scenario: Verify Active Sessions Value
1. Navigate to "/dashboard"
2. Assert page contains "Active Sessions"
3. Assert page contains "Active Sessions" with value "Active Sessions"
