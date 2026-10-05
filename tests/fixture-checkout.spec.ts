import { test, expect } from '../fixtures/test-fixtures';

test('Fixture - Successful Checkout', async ({
  loginPage,
  productPage,
  checkoutPage
}) => {

  await loginPage.open();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await productPage.addBackpackToCart();

  await productPage.openCart();

  await checkoutPage.checkout();

  await checkoutPage.fillCustomerData(
    'Bisyar',
    'Akhmad',
    '15000'
  );

  await checkoutPage.continue();

  await checkoutPage.finish();

  await expect(checkoutPage.completeMessage)
    .toHaveText('Thank you for your order!');
});
