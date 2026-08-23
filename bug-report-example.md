# Example Bug Report (Template)

> This is a fictional example showing how to write a clear defect report. It does **not** claim a current SauceDemo defect.

## Summary

Cart badge does not update after adding a product.

## Environment

- Application: SauceDemo practice site
- Browser: Chrome 140
- Operating system: Windows 11
- Test account: `standard_user`

## Preconditions

- User is on the Products page.
- Cart is empty.

## Steps to reproduce

1. Select **Add to cart** for Sauce Labs Backpack.
2. Inspect the shopping-cart icon in the upper-right corner.

## Expected result

The cart badge displays `1`, confirming one product has been added.

## Actual result

The product button changes to **Remove**, but no cart badge is visible.

## Severity and priority

- Severity: High
- Priority: P1

## Evidence

Attach a screenshot, video, browser console output, or the Playwright trace from the failed test run.
