const chai = require('chai');
const { expect } = chai;
const User = require('../../src/models/User');

describe('User Model', () => {
  it('should create a new user', () => {
    const user = new User('testuser', 'testpassword');
    expect(user.username).to.equal('testuser');
    expect(user.password).to.equal('testpassword');
  });
});
