import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('TC-CHECKOUT-001 - Successful Checkout', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Login
  await loginPage.open();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  // Add product
  await productPage.addBackpackToCart();

  // Open cart
  await productPage.openCart();

  // Checkout
  await checkoutPage.checkout();

  // Customer information
  await checkoutPage.fillCustomerData(
    'Bisyar',
    'Akhmad',
    '15000'
  );

  await checkoutPage.continue();

  // Finish order
  await checkoutPage.finish();

  // Verify order completed
  await expect(checkoutPage.completeMessage)
    .toHaveText('Thank you for your order!');
});
