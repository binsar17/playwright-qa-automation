import { test, expect } from '@playwright/test';

test('API + UI Integration - Validate user data', async ({ request, page }) => {

  // 1. Ambil data melalui API
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  expect(response.status()).toBe(200);

  const user = await response.json();

  // 2. Validasi data API
  expect(user).toHaveProperty('id');
  expect(user).toHaveProperty('name');
  expect(user).toHaveProperty('email');

  // 3. Buka UI
  await page.goto('https://jsonplaceholder.typicode.com/users/1');

  // 4. Ambil text dari halaman
  const pageContent = await page.textContent('body');

  // 5. Validasi data API muncul di UI
  expect(pageContent).toContain(user.name);
  expect(pageContent).toContain(user.email);
});
