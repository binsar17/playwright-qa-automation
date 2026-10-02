import { test, expect } from '../fixtures/test-fixtures';

test('Fixture - Login menggunakan LoginPage', async ({ loginPage, page }) => {

  await loginPage.open();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.title')).toHaveText('Products');
});
