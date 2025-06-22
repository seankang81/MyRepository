# Daily Report Apps Script

This repository contains a Google Apps Script designed to streamline the creation of daily summary reports. The script reads data from a Google Sheets spreadsheet, compiles key information from the last 24 hours, and sends an email recap to the team.

## Purpose

Use this Apps Script to automate daily reporting so team members receive consistent status updates without manually writing them. You can customize the script to pull data from any sheet and adjust the email format to meet your needs.

## Prerequisites

- A Google account with access to Google Sheets and Gmail.
- A spreadsheet containing the data you want summarized in the daily report.
- Authorization to run Apps Script and send mail from your account.

## Deployment / Execution

1. Open [Google Apps Script](https://script.google.com/).
2. Create a new project and copy the script code from this repository into the editor.
3. Update any spreadsheet IDs or ranges as required.
4. Grant the script required permissions when prompted (such as access to Gmail and Sheets).
5. Save and deploy the script as a time‑driven trigger that runs once per day (e.g., in the morning).

## Usage / Daily Report Workflow

1. Each day, the script fetches new rows from your spreadsheet.
2. It compiles the relevant metrics or notes into a formatted email.
3. The email is automatically sent to the recipients you specify in the script.
4. Recipients can review the summary to track daily progress without opening the spreadsheet.

This simple automation ensures your team always has the latest information without having to manually craft a report each day.
