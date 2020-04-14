const request = require('supertest');
const app = require('../app');

describe('Testing backend', () => {
  test('[NO AUTH] GET /test show return a test object', async () => {
    const response = await request(app).get('/test').expect(200);

    expect(response.body.name).toBe('KeepCoding');
  });
});
