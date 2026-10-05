import { test, expect } from '@playwright/test';

test('GET username berhasil', async ({ request }) => {

    //1. Kirim GET request
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1'
);

    // 2. Verifikasi status code
  expect(response.status()).toBe(200);

    // 3. Ambil response body JSON  
  const body = await response.json();
  
    // 4. Verifikasi data
  expect(body.id).toBe(1);
  expect(body.name).toBe('Leanne Graham');

});

test('POST create user berhasil', async ({ request }) => {

    //1. Kirim POST request
    const response = await request.post(
        'https://jsonplaceholder.typicode.com/users',
        {
            data: {
                name: 'Bisyar QA',
                username: 'bisyarqa',
                email: 'akhmadbinsar@gmail.com'
            }
        }
    );

    // 2. Verifikasi status code
    expect(response.status()).toBe(201);

    // 3. Ambil response body JSON
    const body = await response.json();

    // 4. Verifikasi response
    expect(body.name).toBe('Bisyar QA');
    expect(body.username).toBe('bisyarqa');
    expect(body.email).toBe('akhmadbinsar@gmail.com');

});

test('PUT update user berhasil', async ({ request }) => {

    //1. Kirim PUT request
    const response = await request.put(
        'https://jsonplaceholder.typicode.com/users/1',
        {
            data: {
                name: 'Bisyar QA Updated',
                username: 'bisyarqaupdated',
                email: 'bisyarqaupdated@gmail.com'
            }
        }
    );

    // 2. Verifikasi status code
    expect(response.status()).toBe(200);

    // 3. Ambil response body JSON
    const body = await response.json();

    // 4. Verifikasi data yang diupdate
    expect(body.name).toBe('Bisyar QA Updated');
    expect(body.username).toBe('bisyarqaupdated');
    expect(body.email).toBe('bisyarqaupdated@gmail.com');

}); 

test('DELETE user berhasil', async ({ request }) => {

    //1. Kirim DELETE request
    const response = await request.delete(
        'https://jsonplaceholder.typicode.com/users/1'
    );

    // 2. Verifikasi status code
    expect(response.status()).toBe(200);

});