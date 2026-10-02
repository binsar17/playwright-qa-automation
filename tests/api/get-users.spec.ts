import { test, expect } from '@playwright/test';

test('API - GET users', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  // Verify status code
  expect(response.status()).toBe(200);

  // Ambil response JSON
  const users = await response.json();

  // Verify response berupa array
  expect(Array.isArray(users)).toBeTruthy();

  // Verify jumlah data
  expect(users.length).toBeGreaterThan(0);

  // Verify data user pertama
  expect(users[0]).toHaveProperty('id');
  expect(users[0]).toHaveProperty('name');
  expect(users[0]).toHaveProperty('email');
});
