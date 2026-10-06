# Playwright QA Automation

Automation QA Framework built with **Playwright + TypeScript** for UI Testing,
API Testing, Data-Driven Testing, Page Object Model, Fixtures, Cross-Browser
Testing, Allure Reporting, Docker, and CI/CD.

## 🚀 Project Overview

This project demonstrates an end-to-end Automation QA framework covering:

- UI Automation Testing
- API Testing
- Positive & Negative Testing
- Data-Driven Testing
- Page Object Model (POM)
- Custom Fixtures
- UI + API Integration
- Cross-Browser Testing
- Test Reporting
- Docker
- Docker Compose
- GitHub Actions CI/CD
- Test Artifacts

The project is designed as a practical portfolio for **QA Automation Engineer / SDET** roles.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Playwright | UI & API Automation |
| TypeScript | Programming Language |
| Node.js | Runtime |
| REST API | API Testing |
| Git | Version Control |
| GitHub | Source Control |
| GitHub Actions | CI/CD |
| Docker | Test Containerization |
| Docker Compose | Container Orchestration |
| Allure | Test Reporting |
| HTML Report | Playwright Reporting |
| Linux / Ubuntu | Development Environment |

---

## 📁 Project Structure

```text
playwright-qa-automation/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── fixtures/
│   └── test-fixtures.ts
│
├── pages/
│   ├── LoginPage.ts
│   ├── ProductPage.ts
│   └── CheckoutPage.ts
│
├── tests/
│   ├── api/
│   │   ├── api.spec.ts
│   │   ├── advanced-api.spec.ts
│   │   ├── api-ui-integration.spec.ts
│   │   ├── create-user.spec.ts
│   │   ├── delete-user.spec.ts
│   │   ├── get-users.spec.ts
│   │   ├── negative-api.spec.ts
│   │   └── update-user.spec.ts
│   │
│   ├── checkout.spec.ts
│   ├── data-driven-login.spec.ts
│   ├── fixture-checkout.spec.ts
│   ├── fixture-login.spec.ts
│   ├── login.spec.ts
│   ├── product.spec.ts
│   ├── example.spec.ts
│   └── test-data.ts
│
├── .dockerignore
├── .env
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md