import supertest from 'supertest';
import app from './../index';

const request = supertest(app);

describe('Test app is available', () => {
  it('should confirm app is running', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});
