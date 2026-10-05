# Playwright QA Automation

Playwright QA Automation Framework using TypeScript for UI Testing, API Testing,
Data-Driven Testing, Page Object Model, Fixtures, and CI/CD.

## 🚀 Tech Stack

- Playwright
- TypeScript
- Node.js
- Git & GitHub
- GitHub Actions
- REST API Testing
- Page Object Model (POM)
- Data-Driven Testing
- Fixtures

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
│   └── product.spec.ts
│
├── playwright.config.ts
├── package.json
└── README.md