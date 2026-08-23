import { expect, test } from '@playwright/test';
import { InventoryPage } from './pages/InventoryPage.js';
import { LoginPage } from './pages/LoginPage.js';

test.describe('Authentication', () => {
  test('standard user can log in and reach the product inventory', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory.html/);
    await expect(inventoryPage.title).toHaveText('Products');
  });

  test('invalid password shows a helpful error message', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login('standard_user', 'wrong_password');

    await expect(loginPage.errorMessage).toContainText('Username and password do not match');
    await expect(page).toHaveURL(/saucedemo.com\/?$/);
  });
});
