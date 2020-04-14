const request = require('supertest');
const app = require('../app');

describe('Testing backend', () => {
  test('[NO AUTH] GET /test should return a test object', async () => {
    const response = await request(app).get('/test').expect(200);

    expect(response.body.name).toBe('KeepCoding');
  });

  test('[NO AUTH] POST /car should return a car object', async () => {
    const response = await request(app).post('/car').send({
      model: 'Tesla',
      cv: 450,
    }).expect(200);

    expect(response.body.car).toBeDefined();
    expect(response.body.car._model).toBe('Tesla');
    expect(response.body.car._cv).toBe(450);

  });
});
