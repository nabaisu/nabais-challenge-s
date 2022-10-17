import helpers from './helpers';

const {groupByKey, getValueAtPath} = helpers;

describe('groupByKey', () => {
  it('should expect an array as the first argument', () => {
    const types = [1, 'a', {}, NaN, null, true];
    types.forEach((type) => {
      expect(() => groupByKey(type)).toThrow();
    });
  });
  it('should expect a string as the first argument', () => {
    const types = [1, [], {}, NaN, null, true];
    types.forEach((type) => {
      expect(() => groupByKey([], type)).toThrow();
    });
  });

  it('should return an empty object if the array is empty', () => {
    expect(groupByKey([], 'a')).toEqual({});
  });

  it('should return an object with the value of the keys and its count', () => {
    const obj = [{a: 'amigo', b: 2}];
    const result = groupByKey(obj, 'a');
    const expected = {amigo: 1};
    expect(result).toEqual(expected);
  });

  it('should still get 100% if the ocurrences are the same', () => {
    const obj = [{a: 'amigo', b: 2}, {a: 'amigo'}];
    const result = groupByKey(obj, 'a');
    const expected = {amigo: 1};
    expect(result).toEqual(expected);
  });

  it('should be able to calculate averages for more than 1 key', () => {
    const obj = [
      {a: 'amigo', b: 2},
      {a: 'amigo'},
      {a: 'ola'},
      {a: 'outro'},
    ];
    const result = groupByKey(obj, 'a');
    const expected = {amigo: 0.5, ola: 0.25, outro: 0.25};
    expect(result).toEqual(expected);
  });
});

describe('getValueAtPath', () => {
  it('should expect an object as the first argument', () => {
    const types = [1, 'a', [], NaN, null, true];
    types.forEach((type) => {
      expect(() => getValueAtPath(type)).toThrow();
    });
  });

  it('should expect a string as the second argument', () => {
    const types = [1, {}, [], NaN, null, true];
    types.forEach((type) => {
      expect(() => getValueAtPath({}, type)).toThrow();
    });
  });

  it('should default to \'none\' if not found, but should be able to set the default value', () => {
    expect(getValueAtPath({a: 1}, 'b')).toBe('none');
    expect(getValueAtPath({a: 1}, 'b', 'aaaa')).toBe('aaaa');
  });

  it('should get the value of a simple object', () => {
    expect(getValueAtPath({a: 1}, 'a')).toBe(1);
  });

  it('should get the value of a nested object', () => {
    expect(getValueAtPath({d: 4, a: {b: {c: 42}}}, 'a.b.c')).toBe(42);
  });

  it('should return default value if not found in nested object', () => {
    expect(getValueAtPath({a: {b: {c: 123}}}, 'a.v.c')).toBe('none');
  });
});
