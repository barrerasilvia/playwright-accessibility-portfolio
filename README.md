# playwright-accessibility-portfolio

## Description

This project is a web test automation portfolio built with Playwright, focused on functional and accessibility testing.

The goal of this repository is to demonstrate practical experience designing and executing automated tests using modern web testing tools, applying best practices such as Page Object Model (POM), reliable selectors, and automated accessibility validations aligned with WCAG guidelines.

The project includes:
- Automated functional tests for core user flows
- Automated accessibility checks using axe-core
- A clear and maintainable test architecture
- Well-documented test scenarios and findings

---

## Configuration

This project is configured using the following tools and technologies:

- **Playwright** for end-to-end web test automation  
- **TypeScript** as the main programming language  
- **Page Object Model (POM)** to improve test maintainability and readability  
- **axe-core** for automated accessibility testing  
- **Node.js** as the runtime environment  

The Playwright setup is centralized in the `playwright.config.ts` file, where browser settings, test execution options, and reporting behavior are defined.

---

## Project Structure

The project follows a clear and scalable structure:

├── tests/ # Test specifications
├── pages/ # Page Object Models
├── utils/ # Helper functions and accessibility utilities
├── playwright.config.ts
├── package.json
└── README.md

This structure helps keep tests clean, reusable, and easy to maintain as the project grows.

---

## Accessibility Testing Approach

Accessibility checks are automated using **axe-core**, focusing on detecting common WCAG issues such as:

- Missing or incorrect accessible names
- Improper roles and attributes
- Keyboard navigation barriers
- Color contrast issues (when detectable automatically)

Automated accessibility tests are intended to complement manual accessibility testing, not replace it.

---

## Purpose of This Repository

This repository is intended as a professional portfolio to showcase skills in:

- Web accessibility testing
- Test automation with Playwright
- Writing maintainable and scalable automated tests
- Applying accessibility best practices in real-world scenarios
