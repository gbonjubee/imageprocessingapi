import supertest from 'supertest';
import app from './../../../index';

const request = supertest(app);

describe('Test /api/images endpoint', () => {
  it('test happy flow - valid filename, width and height', async () => {
    const response = await request.get(
      '/api/images?filename=encenadaport.jpg&width=500&height=50'
    );
    expect(response.status).toBe(200);
  });

  it('should return filenotfound error (404) for invalid filename', async () => {
    const response = await request.get(
      '/api/images?filename=invalid.jpg&width=500&height=50'
    );
    expect(response.status).toBe(404);
  });

  it('should return bad request (400) for invalid width ', async () => {
    const response = await request.get(
      '/api/images?filename=encenadaport.jpg&width=0&height=50'
    );
    expect(response.status).toBe(400);
  });

  it('should return bad request (400) for invalid height ', async () => {
    const response = await request.get(
      '/api/images?filename=encenadaport.jpg&width=50&height=0'
    );
    expect(response.status).toBe(400);
  });
});
