import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';

test('TC-PRODUCT-001 - Add Backpack to Cart', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);

  // Login
  await loginPage.open();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  // Verify Product page
  await expect(page.locator('.title')).toHaveText('Products');

  // Add Backpack
  await productPage.addBackpackToCart();

  // Open Cart
  await productPage.openCart();

  // Verify product
  await expect(
    page.getByText('Sauce Labs Backpack')
  ).toBeVisible();
});
