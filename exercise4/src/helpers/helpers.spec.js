import helpers from './helpers';

const {sortByAge, filterByAge} = helpers;

describe('sortByAge', () => {
  it('should be able to sort array of objects by age', () => {
    const obj = [{age: 4}, {age: 1}, {age: 2}, {age: 3}];
    const result = obj.sort(sortByAge);
    const expected = [{age: 1}, {age: 2}, {age: 3}, {age: 4}];
    expect(result).toEqual(expected);
  });
});

describe('filterByAge', () => {
  it('should return a function', () => {
    const filterFn = filterByAge(1, 2);
    expect(typeof filterFn).toEqual('function');
  });

  it('should be able to filter array of objects by age', () => {
    const obj = [{age: 4}, {age: 1}, {age: 3}, {age: 2}];
    const filterFn = filterByAge(2, 3);
    const expected = [{age: 3}, {age: 2}];
    expect(obj.filter(filterFn)).toEqual(expected);
  });
});
