import { test, expect } from '@playwright/test';

test.describe('Negative API Testing', () => {

  test('TC-API-NEG-001 - GET user tidak ditemukan', async ({ request }) => {

    const response = await request.get(
      'https://jsonplaceholder.typicode.com/users/9999'
    );

    expect(response.status()).toBe(404);
  });


  test('TC-API-NEG-002 - GET invalid endpoint', async ({ request }) => {

    const response = await request.get(
      'https://jsonplaceholder.typicode.com/invalid-endpoint'
    );

    expect(response.status()).toBe(404);
  });

});
