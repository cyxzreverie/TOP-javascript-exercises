const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Paul', () => {
    expect(values.firstName).toEqual('Paul');
  });
  test('lastName is Lee', () => {
    expect(values.lastName).toEqual('Lee');
  });
  test('thisYear is 2026', () => {
    expect(values.thisYear).toEqual(2026);
  });
  test('birthYear is 2004', () => {
    expect(values.birthYear).toEqual(2004);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Paul Lee and I am 22 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Paul Lee', () => {
    expect(values.fullName).toEqual('Paul Lee');
  });
  test('age is 22', () => {
    expect(values.age).toEqual(22);
  });
});
