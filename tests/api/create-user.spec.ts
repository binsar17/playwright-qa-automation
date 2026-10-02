import { test, expect } from '@playwright/test';

test('API - POST create user', async ({ request }) => {
  const response = await request.post(
    'https://jsonplaceholder.typicode.com/users',
    {
      data: {
        name: 'Bisyar Akhmad',
        username: 'bisyar',
        email: 'bisyar@example.com'
      }
    }
  );

  expect(response.status()).toBe(201);

  const user = await response.json();

  expect(user).toHaveProperty('id');
  expect(user.name).toBe('Bisyar Akhmad');
  expect(user.username).toBe('bisyar');
  expect(user.email).toBe('bisyar@example.com');
});
