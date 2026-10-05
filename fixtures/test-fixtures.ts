import { test as base, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CheckoutPage } from '../pages/CheckoutPage';

type Fixtures = {
  loginPage: LoginPage;
  productPage: ProductPage;
  checkoutPage: CheckoutPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },

  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
});

export { expect };
