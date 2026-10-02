import { test, expect } from '@playwright/test';

const loginData = [
  {
    username: 'standard_user',
    password: 'secret_sauce',
    expected: 'success'
  },
  {
    username: 'locked_out_user',
    password: 'secret_sauce',
    expected: 'locked'
  },
  {
    username: 'problem_user',
    password: 'secret_sauce',
    expected: 'success'
  },
  {
    username: 'standard_user',
    password: 'wrong_password',
    expected: 'invalid'
  }
];

test.describe('Data Driven Login Testing', () => {

  loginData.forEach((data, index) => {

    test(
      `TC-LOGIN-${String(index + 1).padStart(3, '0')} - ${data.username} - ${data.expected}`,
      async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        await page.locator('#user-name').fill(data.username);
        await page.locator('#password').fill(data.password);
        await page.locator('#login-button').click();

        if (data.expected === 'success') {

          await expect(page).toHaveURL(/inventory/);

          await expect(page.locator('.title'))
            .toHaveText('Products');

        } else {

          const errorMessage =
            page.locator('[data-test="error"]');

          await expect(errorMessage).toBeVisible();

        }
      }
    );
  });
});
