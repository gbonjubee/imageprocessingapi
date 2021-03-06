import supertest from 'supertest';
import app from './../../index';

const request = supertest(app);

describe('Test /api endpoint', () => {
  it('should confirm /api is a valid path', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
});
