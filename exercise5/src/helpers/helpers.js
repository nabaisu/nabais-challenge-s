export default {
  // group an array by key and returns an object containing percentage for each group
  // ex: groupByKey([{color: 'blue'}, {color: 'green'}, {color: 'blue'}, {color: 'blue'}], 'color')  =>  {blue: 0.75, green: 0.25}
  groupByKey(array, key) {
    if (!Array.isArray(array)) {
      throw new Error('the first argument must be an array');
    }
    if (typeof key !== 'string') {
      throw new Error('the second argument must be a string');
    }
    if (!array.length) return {};
    const helper = {total: {}, average: {}};
    const {total, average} = helper;
    let totalCount = 0;
    array.forEach((el) => {
      const subKey = el[key];
      if (subKey) {
        total[subKey] = total[subKey] ? total[subKey] + 1 : 1;
        totalCount += 1;
      }
    });
    Object.keys(total).forEach((k) => {
      average[k] = totalCount ? total[k] / totalCount : 0;
    });

    return average;
  },
  // get the value of an object at a given dotted path
  // ex: getValueAtPath({my: {dotted: {path: 123}}}, 'my.dotted.path')  =>  123
  getValueAtPath(obj, path, defaultValue = 'none') {
    if (typeof obj !== 'object' && !Array.isArray(obj)) {
      throw new Error('first argument must be an object');
    }
    if (typeof path !== 'string') throw new Error('path should be a string');
    const vals = path.split('.');
    return vals.reduce(
        (prevObj, curr) => (prevObj?.[curr] ? prevObj?.[curr] : defaultValue),
        obj,
    );
  },
};
