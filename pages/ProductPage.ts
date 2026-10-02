import { Page, Locator } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly backpack: Locator;
  readonly cartButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.backpack = page.getByText('Sauce Labs Backpack');
    this.cartButton = page.locator('.shopping_cart_link');
  }

  async addBackpackToCart() {
    await this.page
      .locator('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click();
  }

  async openCart() {
    await this.cartButton.click();
  }
}
