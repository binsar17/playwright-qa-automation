import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Test Suite', () => {

  test('TC-LOGIN-001 - Login dengan credential valid', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
      'standard_user',
      'secret_sauce'
    );

    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.title')).toHaveText('Products');
  });


  test('TC-LOGIN-002 - Login dengan password salah', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
      'standard_user',
      'password_salah'
    );

    await expect(loginPage.errorMessage).toBeVisible();

    await expect(loginPage.errorMessage).toContainText(
      'Username and password do not match'
    );
  });

});
