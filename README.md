**Submitted by:** Yuval Pery

## Overview
This repository contains the deliverables for the Jones Automation technical assignment. The submission is divided into two main components:
1. **E2E Automation Script:** A robust automated flow built with Playwright and Node.js that interacts with the designated landing page, populates the form, and validates the submission.
2. **Product & QA Analysis:** A comprehensive UI/UX and security review of the provided billing mock-up, including structured test cases and a product-level architectural solution (provided in the attached PDF).

## Project Structure
```text
├── tests/
│   └── jones.spec.js        # The main Playwright test script
├── form-before-submit.png   # Automated screenshot captured right before form submission
├── package.json             # Project dependencies and metadata
├── playwright.config.js     # Playwright configuration file
└── README.md                # Project documentation
```

## Prerequisites
To run this project locally, ensure you have the following installed:
* [Node.js](https://nodejs.org/) (v14 or higher recommended)

## Installation
1. Extract the provided ZIP file into your desired directory.
2. Open a terminal and navigate to the root folder of the extracted project.
3. Install the required Node dependencies:
   ```bash
   npm install
   ```
4. Install the Playwright browser binaries (if not already cached globally):
   ```bash
   npx playwright install
   ```

## Running the Automation

The test script navigates to the target URL, fills out all required fields using reliable CSS selectors, selects the target dropdown option, captures a screenshot of the filled form, submits it, and waits for the specific URL route change to validate success.

**To run the test in headless mode (default):**
```bash
npx playwright test
```

**To run the test in headed mode (to visually observe the browser interaction):**
```bash
npx playwright test --headed
```

**To view the interactive HTML test report:**
```bash
npx playwright show-report
```

## Notes
1. The automation utilizes explicit ID locators based on the provided HTML source for maximum stability.
2. Form submission validation is handled dynamically by waiting for the specific URL route (/thank-you.html) rather than an arbitrary network timeout, ensuring consistent execution.