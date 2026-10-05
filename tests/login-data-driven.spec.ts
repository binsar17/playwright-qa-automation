import {test, expect} from '@playwright/test'; 
import { LoginPage } from './LoginPage';

const loginScenarios = [
  {
    description: 'Login berhasil dengan username dan password valid',
    username: 'standard_user',
    password: 'secret_sauce',
    shouldLogin: true,
  },
  {
    description: 'Login gagal dengan password tidak valid',
    username: 'standard_user',
    password: 'invalid_password',
    shouldLogin: false,
  },
  {
    description: 'Login gagal dengan username terkunci',
    username: 'locked_out_user',
    password: 'secret_sauce',
    shouldLogin: false,  
  },
];

for (const scenario of loginScenarios) {
  test(scenario.description, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(scenario.username, scenario.password);

    if (scenario.shouldLogin) {
      await expect(page).toHaveURL(/inventory/);
    } else {
      await expect(loginPage.errorMessage).toBeVisible();
    }
  });
}   