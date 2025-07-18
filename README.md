
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
- [Other Projects](#other-projects)
- [Technical Documents](#technical-documents)
- [Contacts](#contacts)

## 📖 Introduction
This repository contains a **Test Automation Framework** built with **Playwright** and **TypeScript** for testing **web applications**.


<!-- ## 🎥 Video Tutorial

<a href="https://www.youtube.com/watch?v=g0nG6aPbpl4&list=PLrBBHmoBFxBUu9G7haETpa0B03H9GnfKX"> <img src="https://img.youtube.com/vi/g0nG6aPbpl4/0.jpg" alt="Test Automation Framework | WEB | Cypress + JS" width="200"> </a>

Click on the image above to watch the tutorials. -->

## 🛠️ Prerequisites

- [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) (v18.16.1 or higher recommended)
- [![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/) (v9.5.1 or higher recommended)

## ▶️ Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Srikanth-Bokka/TestAutomationFramework_Srikanth_Bokka_Web_Playwright_TS.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd TestAutomationFramework_Srikatnth_Bokka_Web_Playwright_TS-main
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

Playwright HTML report (Logs, Screenshots, Traces and Videos are attached) is stored in the `playwright-report` directory.