const request = require('supertest');
const app = require('../../src/app');

describe('numbers route', () => {
  afterAll((done) => {
    done();
  });

  test('should return a matching object at numbers route', async () => {
    const response = await request(app).get('/numbers');

    expect(response.body).toMatchObject({
      isExtractionComplete: false,
      pagesSucessfulyExtracted: 0,
      pagesIterated: 0,
      data: [],
    });
  });
});
