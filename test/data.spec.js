global.window = global;
require('./data.spec.js');
require('../src/data');

describe('example', () => {
  it('debería ser una función', () => {
    assert.equal(typeof example, 'function');
  });

  it('debería retornar "example"', () => {
    assert.equal(example(), 'example');
  });
});
