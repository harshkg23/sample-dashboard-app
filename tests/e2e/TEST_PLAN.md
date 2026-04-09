# TollGate — Auto-Generated Test Plan

> Generated on 2026-04-09T05:29:14.294Z

## Scenario: Verify Dashboard Page Heading

1. Navigate to "/dashboard"
2. Assert page contains "Dashboard Overview"

## Scenario: Verify Active Sessions Value

1. Navigate to "/dashboard"
2. Assert page contains "1,240"

## Scenario: Verify Recent Activity Title TestID

1. Navigate to "/dashboard"
2. Assert page contains "Recent Activity"
3. Assert element with data-testid "recent-activity-title" exists

## Scenario: Verify User Greeting in Header

1. Navigate to "/"
2. Assert page contains "Good morning, Alex"

## Scenario: Verify Dashboard Route Exists

1. Navigate to "/dashboard"
2. Assert page contains "Dashboard Overview"
