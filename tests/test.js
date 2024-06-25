// tests/app.test.js
import request from 'supertest';
import app from '../src/app.js';

describe('GET /', () => {
  it('should return a 200 status code and expected response', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Hello, world!' });
  });
});
