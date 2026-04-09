# TollGate — Auto-Generated Test Plan

> Generated on 2026-04-09T04:19:21.231Z

## Scenario: Verify Dashboard Page Title
1. Navigate to "/dashboard"
2. Assert page contains "Dashboard Overview"

## Scenario: Verify Recent Activity Title
1. Navigate to "/dashboard"
2. Assert page contains "Recent Activity"

## Scenario: Verify User Greeting in Header
1. Navigate to "/dashboard"
2. Assert page contains "Good morning, Alex"

## Scenario: Verify Activity Item Rendering
1. Navigate to "/dashboard"
2. Assert page contains "completed onboarding"
3. Assert page contains "upgraded to Pro plan"
4. Assert page contains "submitted a support ticket"
5. Assert page contains "exported analytics report"

## Scenario: Verify Dashboard Announcement Test ID
1. Navigate to "/dashboard"
2. Assert element with testid "dashboard-announcement" exists
