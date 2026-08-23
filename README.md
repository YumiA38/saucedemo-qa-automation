# SauceDemo QA Automation Portfolio

A junior-friendly QA portfolio project that combines a concise manual test pack with maintainable end-to-end UI automation. It tests the public [SauceDemo](https://www.saucedemo.com/) practice application using Playwright and TypeScript.

> This is an educational portfolio project. It is not affiliated with Sauce Labs or the SauceDemo application.

## What this project demonstrates

- Test planning, test cases, priorities and expected results
- Clear, repeatable browser automation with **Playwright + TypeScript**
- Page Object Model (POM) structure
- Positive, negative, cart and checkout test coverage
- GitHub Actions CI and an HTML test-report artifact
- A professional example bug report template

## Automated coverage

| Area | Scenarios |
| --- | --- |
| Authentication | Successful login; invalid password validation |
| Shopping cart | Add an item; verify counter; remove an item |
| Checkout | Complete checkout and verify the confirmation |

The detailed manual cases are in [docs/test-cases.md](docs/test-cases.md). The scope and risks are in [docs/test-plan.md](docs/test-plan.md).

## Tech stack

- TypeScript
- Playwright Test
- GitHub Actions

## Run locally

```bash
npm install
npx playwright install chromium
npm test
```

Useful commands:

```bash
npm run test:headed    # Watch the browser run
npm run test:ui        # Open Playwright's UI mode
npm run report         # Open the last HTML report
```

## Project structure

```text
.
├── .github/workflows/    # CI pipeline
├── docs/                 # Test plan, manual cases and bug-report example
├── tests/
│   ├── pages/            # Reusable page objects
│   ├── login.spec.ts
│   └── cart-and-checkout.spec.ts
├── playwright.config.ts
└── package.json
```

## CI

Every push and pull request runs the tests in GitHub Actions. When a test fails, the workflow uploads the Playwright HTML report so the failure can be inspected from the workflow run.

## Notes for recruiters

This repository intentionally keeps the scope small and readable. The same structure can scale to desktop or web-product testing by adding API checks, fixtures, accessibility checks, test data, and tags for smoke/regression suites.
