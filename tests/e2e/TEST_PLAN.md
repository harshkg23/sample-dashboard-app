# TollGate — Auto-Generated Test Plan

> Generated on 2026-04-08T19:34:10.789Z

## Scenario: Verify Header Component Renders Correctly
1. Navigate to /
2. Assert page contains "Good morning, Alex"

## Scenario: Verify Dashboard Page Contains Recent Activity Title
1. Navigate to /dashboard
2. Assert page contains "Recent Activity"
3. Assert element with data-testid "recent-activity-title" exists

## Scenario: Verify Activity Title Bug Test ID Exists
1. Navigate to /dashboard
2. Assert element with data-testid "activity-title-bug" exists

## Scenario: Verify Recent Activity Title is Not Empty
1. Navigate to /dashboard
2. Assert page contains "Recent Activity"
