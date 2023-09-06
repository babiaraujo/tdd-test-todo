const chai = require('chai');
const { expect } = chai;
const Todo = require('../../src/models/Todo');

describe('Todo Model', () => {
  it('should create a new task with default completed status', () => {
    const todo = new Todo('Test Task');
    expect(todo.title).to.equal('Test Task');
    expect(todo.completed).to.be.false;
  });
});
