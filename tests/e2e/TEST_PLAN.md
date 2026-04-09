# TollGate — Auto-Generated Test Plan

> Generated on 2026-04-09T00:08:01.891Z

## Scenario: Verify Dashboard Page Heading

1. Navigate to "/dashboard"
2. Assert page contains "Dashboard Overview"

## Scenario: Verify Active Sessions Value

1. Navigate to "/dashboard"
2. Assert page contains "Active Sessions"
3. Assert page contains "1,240"

## Scenario: Verify Recent Activity Section

1. Navigate to "/dashboard"
2. Assert page contains "Recent Activity"
3. Assert page contains "Sarah Chen completed onboarding"
4. Assert page contains "James Wilson upgraded to Pro plan"
5. Assert page contains "Maria Garcia submitted a support ticket"
6. Assert page contains "David Kim exported analytics report"

## Scenario: Verify Header User Greeting

1. Navigate to "/"
2. Assert page contains "Good morning, Alex"

## Scenario: Verify Recent Activity Title TestID

1. Navigate to "/dashboard"
2. Assert page contains element with data-testid "recent-activity-title"
