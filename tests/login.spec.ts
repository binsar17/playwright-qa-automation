import { test, expect } from '@playwright/test';
import { loginData } from './test-data';
import { LoginPage } from './LoginPage';

test('Login berhasil dengan username dan password valid', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login(
    loginData.validUser.validUser,
    loginData.validUser.validPassword
  );
  
  await expect(page).toHaveURL(/inventory/);

});


test('Login gagal dengan username dan password tidak valid', async ({ page }) => {


const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login(
    loginData.invalidUser.invalidUser,
    loginData.invalidUser.invalidPassword
  );

   await expect(loginPage.errorMessage).toBeVisible();
});