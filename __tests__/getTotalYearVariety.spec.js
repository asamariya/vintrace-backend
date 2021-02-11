const request = require('supertest');
const app = require('../app');

describe('Get the total percentage based on year & variety', () => {
  it('a valid lotCode should return 200 json response', async (done) => {
    const lotCode = '15MPPN002-VK';
    const url = `/api/breakdown/year-variety/${lotCode}`;
    request(app)
      .get(url)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });

  it('an invalid lotCode should return 404 response', async (done) => {
    const lotCode = '15MPPN002-V';
    const url = `/api/breakdown/year-variety/${lotCode}`;
    request(app)
      .get(url)
      .expect('Content-Type', /json/)
      .expect(404)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
      });

    done();
  });
});
