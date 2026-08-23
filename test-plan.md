# Test Plan — SauceDemo

## 1. Objective

Verify that a customer can authenticate, add a product to the cart, manage the cart, and complete checkout successfully. The project also verifies that an invalid login is handled clearly.

## 2. Scope

**In scope**

- Login validation
- Product inventory access
- Add/remove cart behavior
- Checkout with valid customer details
- Confirmation after checkout

**Out of scope**

- Payment gateway integrations
- Load, performance and security testing
- Cross-browser/device coverage beyond Chromium
- Accessibility audit

## 3. Test approach

| Layer | Approach |
| --- | --- |
| Manual | Risk-based functional cases documented in `test-cases.md` |
| Automation | Playwright UI tests using reusable page objects |
| Regression | Run the complete test suite on every push and pull request |
| Evidence | GitHub Actions retains the Playwright report when CI fails |

## 4. Entry and exit criteria

| Entry criteria | Exit criteria |
| --- | --- |
| SauceDemo is reachable; a supported browser is available | All P0/P1 tests pass; failures have a reproducible report and evidence |
| Test credentials are available | CI report has been reviewed for every failed run |

## 5. Risks and mitigations

| Risk | Mitigation |
| --- | --- |
| Public demo site is unavailable or changes | Keep selectors based on `data-test` values and record the target URL in the README |
| Shared demo data changes | Tests use a fresh user session and a single predictable product |
| A transient browser failure creates noise | Capture traces/screenshots/video on failure and retry in CI |
