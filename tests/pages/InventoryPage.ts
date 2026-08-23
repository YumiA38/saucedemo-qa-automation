import { type Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly title: Locator;
  readonly cartLink: Locator;
  readonly cartBadge: Locator;
  readonly backpackAddButton: Locator;
  readonly backpackRemoveButton: Locator;

  constructor(private readonly page: Page) {
    this.title = page.getByTestId('title');
    this.cartLink = page.getByTestId('shopping-cart-link');
    this.cartBadge = page.getByTestId('shopping-cart-badge');
    this.backpackAddButton = page.getByTestId('add-to-cart-sauce-labs-backpack');
    this.backpackRemoveButton = page.getByTestId('remove-sauce-labs-backpack');
  }

  async addBackpackToCart(): Promise<void> {
    await this.backpackAddButton.click();
  }

  async openCart(): Promise<void> {
    await this.cartLink.click();
  }
}
