# TollGate — Auto-Generated Test Plan

> Generated on 2026-04-08T19:34:29.083Z

## Scenario: Verify Header Component Renders Correctly
1. Navigate to "/"
2. Assert page contains "Good morning, Alex"

## Scenario: Verify Recent Activity Title on Dashboard
1. Navigate to "/dashboard"
2. Assert page contains "Recent Activity"
3. Assert element with data-testid "recent-activity-title" exists

## Scenario: Verify Header Component Structure
1. Navigate to "/"
2. Assert element with data-testid "header" exists
3. Assert page contains "Good morning, Alex"

## Scenario: Verify Recent Activity Title Element Exists
1. Navigate to "/dashboard"
2. Assert element with data-testid "recent-activity-title" exists
3. Assert page contains "Recent Activity"
