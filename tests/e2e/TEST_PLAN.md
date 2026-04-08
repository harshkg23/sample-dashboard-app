# TollGate — Auto-Generated Test Plan

> Generated on 2026-04-08T23:20:17.945Z

## Scenario: Verify Dashboard Page Title
1. Navigate to "/dashboard"
2. Assert page contains "Dashboard Overview"

## Scenario: Verify Recent Activity Title
1. Navigate to "/dashboard"
2. Assert page contains "Recent Activity"

## Scenario: Verify User Greeting in Header
1. Navigate to "/"
2. Assert page contains "Good morning, Alex"

## Scenario: Verify Clickability of Edit Profile Button
1. Navigate to "/profile"
2. Click "Edit Profile"

## Scenario: Verify Active Sessions Value
1. Navigate to "/dashboard"
2. Assert page contains "Active Sessions"
3. Assert page contains "1,240"
