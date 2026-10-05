import dotenv from 'dotenv';
dotenv.config();
import {test, expect} from '@playwright/test';

test('GET user dengan query parameter berhasil', async ({ request }) => {
  
 // 1. Kirim GET request dengan query parameter
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users',
    {
      params: {
        id: 1,
      },
    }
  );

  // Status code harus 200
  expect(response.status()).toBe(200);

  // Ambil response body JSON
  const body = await response.json();

  // Pastikan response berupa array
  expect(Array.isArray(body)).toBe(true);
 
  // Pastikan menemukan user 
  expect(body.length).toBeGreaterThan(0);

  // Validasi data user
  expect(body[0].id).toBe(1);
  expect(body[0].name).toBe('Leanne Graham');

});

test('GET user dengan custom header berhasil', async ({ request }) => {

  // 1. Kirim GET request dengan custom header
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1',
    {
      headers: {
        'Accept': 'application/json',
      },
    }
  );

  // Verifikasi status code
  expect(response.status()).toBe(200);

  // Verifikasi content-type
    expect(response.headers()['content-type']).toContain('application/json');
    
 // Ambil response body JSON
    const body = await response.json();

 // Verifikasi data
    expect(body.id).toBe(1);
    expect(body.name).toBe('Leanne Graham');

});    


test('GET user dengan Bearer token berhasil', async ({ request }) => {

const token = process.env.API_TOKEN;

const response = await request.get(
  'https://jsonplaceholder.typicode.com/users/1',
  {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
    },
  }
);

expect(response.status()).toBe(200);

const body = await response.json();

expect(body.id).toBe(1);
expect(body.name).toBe('Leanne Graham');

}); 
