# Manual Test Cases

## Test data

- Valid username: `standard_user`
- Valid password: `secret_sauce`
- Product: `Sauce Labs Backpack`

| ID | Priority | Scenario | Steps | Expected result |
| --- | --- | --- | --- | --- |
| TC-001 | P0 | Valid login | Enter valid credentials and select **Login** | User reaches the Products page |
| TC-002 | P1 | Invalid password | Enter `standard_user` and an invalid password | An error states that the credentials do not match; user remains on login |
| TC-003 | P1 | Empty username | Leave username empty, enter a password, select **Login** | Validation says username is required |
| TC-004 | P0 | Add product to cart | Log in and select **Add to cart** for Sauce Labs Backpack | Button changes to **Remove**; cart badge displays `1` |
| TC-005 | P1 | Remove product from inventory | Add the backpack, then select **Remove** | Cart badge disappears; product can be added again |
| TC-006 | P0 | View cart | Add the backpack and open the cart | Cart shows one correct product, name and price |
| TC-007 | P0 | Complete checkout | Add the backpack; checkout with valid name and postal code; select **Finish** | Success confirmation is displayed |
| TC-008 | P1 | Required checkout fields | Start checkout but leave first name blank; select **Continue** | Validation explains that first name is required |
| TC-009 | P2 | Continue shopping | Open cart and select **Continue Shopping** | User returns to the Products page; cart contents remain |
| TC-010 | P2 | Cart state after logout | Add product, log out, then log in again | Confirm the application behavior is consistent with product requirements |

## Defect severity guide

| Severity | Meaning |
| --- | --- |
| Critical | Core journey is impossible and has no workaround |
| High | Important feature is broken; workaround may exist |
| Medium | Feature works incorrectly but user can continue |
| Low | Cosmetic or wording issue with limited user impact |
