const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const { expect } = chai;

chai.use(chaiHttp);

describe('Todo List', () => {
  let token = '';

  before((done) => {
    chai
      .request(app)
      .post('/api/auth/login')
      .send({ username: 'testuser', password: 'testpassword' })
      .end((err, res) => {
        token = res.body.token;
        done();
      });
  });

  it('should create a new task', (done) => {
    chai
      .request(app)
      .post('/api/todos')
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'Test Task' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('title').to.equal('Test Task');
        done();
      });
  });

  it('should list all tasks', (done) => {
    chai
      .request(app)
      .get('/api/todos')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});
