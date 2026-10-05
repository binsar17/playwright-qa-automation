import { test, expect } from '@playwright/test';

test('API - PUT update user', async ({ request }) => {
  const response = await request.put(
    'https://jsonplaceholder.typicode.com/users/1',
    {
      data: {
        name: 'Bisyar Akhmad Updated',
        username: 'bisyar_updated',
        email: 'bisyar.updated@example.com'
      }
    }
  );

  expect(response.status()).toBe(200);

  const user = await response.json();

  expect(user).toHaveProperty('id');
  expect(user.id).toBe(1);
  expect(user.name).toBe('Bisyar Akhmad Updated');
  expect(user.username).toBe('bisyar_updated');
  expect(user.email).toBe('bisyar.updated@example.com');
});
