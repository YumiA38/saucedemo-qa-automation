import { expect, test, type Page } from '@playwright/test';
import { InventoryPage } from './pages/InventoryPage.js';
import { LoginPage } from './pages/LoginPage.js';

async function logInAsStandardUser(page: Page): Promise<void> {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login('standard_user', 'secret_sauce');
}

test.describe('Cart and checkout', () => {
  test('user can add a product to the cart and remove it again', async ({ page }) => {
    await logInAsStandardUser(page);
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.addBackpackToCart();
    await expect(inventoryPage.cartBadge).toHaveText('1');

    await inventoryPage.backpackRemoveButton.click();
    await expect(inventoryPage.cartBadge).not.toBeVisible();
  });

  test('user can complete checkout for one product', async ({ page }) => {
    await logInAsStandardUser(page);
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();
    await expect(page.getByTestId('inventory-item')).toHaveCount(1);

    await page.getByTestId('checkout').click();
    await page.getByTestId('firstName').fill('Taylor');
    await page.getByTestId('lastName').fill('Tester');
    await page.getByTestId('postalCode').fill('00000');
    await page.getByTestId('continue').click();

    await expect(page).toHaveURL(/checkout-step-two.html/);
    await page.getByTestId('finish').click();
    await expect(page.getByTestId('complete-header')).toHaveText('Thank you for your order!');
  });
});
