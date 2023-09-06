const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const { expect } = chai;

chai.use(chaiHttp);

describe('Authentication', () => {
  it('should register a new user', (done) => {
    chai
      .request(app)
      .post('/api/auth/register')
      .send({ username: 'testuser', password: 'testpassword' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('message').to.equal('User registered successfully');
        done();
      });
  });

  it('should log in a user', (done) => {
    chai
      .request(app)
      .post('/api/auth/login')
      .send({ username: 'testuser', password: 'testpassword' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('token');
        done();
      });
  });
});
