
---
# 💻 Test Automation Framework | WEB 

[![Playwright](https://img.shields.io/badge/Playwright-34495E?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
 

[![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![Playwright HTML Reporter](https://img.shields.io/badge/Playwright%20HTML%20Reporter-<COLOR>?style=for-the-badge&logo=playwright&logoColor=white)](https://www.npmjs.com/package/playwright-html-reporter)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions) 

## 📑 Table of Contents
<!-- # - [Video Tutorial](#video-tutorial) -->
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Continuous Integration](#continuous-integration)
- [Reporting](#reporting)
- [Technical Documents](#technical-documents)

## 📖 Introduction
This repository contains a **Test Automation Framework** built with **Playwright** and **TypeScript** for testing **web applications**.

## 🛠️ Prerequisites

- [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) (v18.16.1 or higher recommended)
- [![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/) (v9.5.1 or higher recommended)

## ▶️ Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Srikanth-Bokka/Playwright_TS_AutomationFramework_Srikanth_Bokka_Web.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Playwright_TS_AutomationFramework_Srikanth_Bokka_Web
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

## 🚀 Running Tests

- **Playwright UI mode:**

  ```bash
  npm run tests:ui-mode
  ```
- **Playwright Debug mode:**

  ```bash
  npm run tests:debug
  ```
- **Playwright Codegen:**

  ```bash
  npm run playwright:codegen
  ```

- **Execution in different browsers:**

  - [![Chrome](https://img.shields.io/badge/Chrome-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://www.google.com/chrome/)
[![Edge](https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=microsoft-edge&logoColor=white)](https://www.microsoft.com/edge/)[![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=firefox&logoColor=white)](https://www.mozilla.org/firefox/)
[![WebKit](https://img.shields.io/badge/WebKit-689F63?style=for-the-badge&logo=webkit&logoColor=white)](https://webkit.org/)
[![Chromium](https://img.shields.io/badge/Chromium-4A90E2?style=for-the-badge&logo=chromium&logoColor=white)](https://www.chromium.org/Home)


  ```bash
  npm run tests:CHROME
  ```
  ```bash
  npm run tests:EDGE
  ```
  ```bash
  npm run tests:FIREFOX
  ```
  ```bash
  npm run tests:WEBKIT
  ```
  ```bash
  npm run tests:CHROMIUM
  ```

- Execution in Headless mode:
  ```bash
  npm run tests:CHROME:HEADLESS
  ```

## 📁 Project Structure

The tests follow a modular and maintainable structure:

```
|-- .github
|     |-- workflows
|          |-- 01_ui_tests_chrome.yml
|          |-- 02_ui_tests_select_one.yml
|          |-- 03_ui_tests_ALL.yml
|-- pages
|     |-- BasePage.ts
|     |-- CartPage.ts
|     |-- Components.ts
|     |-- LoginPage.ts
|     |-- ProductsPage.ts
|-- allure-results/          # Allure test results (generated after test execution)
|-- allure-report/           # Allure HTML report (generated after report generation)
|-- test-data
|     |-- login_credentials.json
|-- tests-saucedemo
|     |-- components.spec.ts
|     |-- login.spec.ts
|-- utils
|     |-- VerificationUtils.ts
|     |-- WaitUtils.ts
|-- .gitignore
|-- package.json
|-- playwright.config.ts
```

- `allure-results`: Contains Allure test results generated after test execution.
- `allure-report`: Contains the generated Allure HTML report with detailed test analytics and visualizations.
- `pages`: Contains the Page Object Model (POM) classes representing web pages and their elements.
- `playwright-report`: Contains the HTML report for tests (Logs, Screenshots, Traces and Videos are attached).
- `test-data`: Contains external files (example: login credentials data) that can be used to mock data during tests.
- `tests-saucedemo`: Contains the actual test files. You can organize your tests into subdirectories as needed. 
- `utils`: Contains the Utilities that provides methods for asserting different conditions on web elements, waits.

## ⚙️ Configuration

- Modify `playwright.config.ts` for playwright configuration settings such as
  - `baseURL`
  - `testDir`
  - `reporter`
  - `fullyParallel`
  - `video`
  - `screenshot`
  - `trace`

## 🔄 Continuous Integration

This project is configured for CI using Github Actions. Check the configurations in `.github/workflows/*.yml`.

- `01_ui_tests_chrome.yml`: This workflow executes tests in Chrome browser.

- `02_ui_tests_select_one.yml`: This workflow will first ask User to select the browser for tests execution.

- `03_ui_tests_ALL.yml`: This workflow executes the tests in all browsers <!-- #(CHROME, EDGE, WEBKIT, CHROMIUM, FIREFOX) -->

  [![Chrome](https://img.shields.io/badge/Chrome-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://www.google.com/chrome/)
  [![Edge](https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=microsoft-edge&logoColor=white)](https://www.microsoft.com/edge/)[![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=firefox&logoColor=white)](https://www.mozilla.org/firefox/)
  [![WebKit](https://img.shields.io/badge/WebKit-689F63?style=for-the-badge&logo=webkit&logoColor=white)](https://webkit.org/)
  [![Chromium](https://img.shields.io/badge/Chromium-4A90E2?style=for-the-badge&logo=chromium&logoColor=white)](https://www.chromium.org/Home)

## 📊 Reporting

This framework uses **Allure Report** for comprehensive test reporting. Allure provides detailed test execution reports with rich features like:

- **Test Execution Timeline**: Visual representation of test execution flow
- **Environment Information**: Detailed system and test environment details
- **Test Categories**: Automatic categorization of tests (failed, broken, skipped, passed)
- **Attachments**: Screenshots, logs, and other test artifacts
- **Trends**: Historical test execution trends and statistics
- **Custom Categories**: Ability to create custom test categories and filters

### Running Tests and Generating Reports

1. **Run tests:**
   ```bash
   npm run playwright:tests
   ```

2. **Generate and open Allure report:**
   ```bash
   npm run allure:report
   ```

3. **Generate report only (without opening):**
   ```bash
   npm run allure:generate
   ```

### Allure Report Structure

- `allure-results/`: Contains raw test execution data
- `allure-report/`: Contains the generated HTML report (created when you run the report command)

### Prerequisites for Allure

Make sure you have Allure command-line tool installed:

**macOS (using Homebrew):**
```bash
brew install allure
```

**Windows (using Scoop):**
```bash
scoop install allure
```

**Linux:**
```bash
sudo apt-add-repository ppa:qameta/allure
sudo apt-get update
sudo apt-get install allure
```

