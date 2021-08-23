import _ from 'lodash';

const getDiff = (obj1, obj2) => {
  const a = _.union(Object.keys(obj1), Object.keys(obj2))
    .sort();
  const b = a.map((key) => {
    if (_.isEqual(obj1[key], obj2[key])) {
      return `    ${key}: ${obj1[key]}`;
    }
    if (!_.has(obj1, key) && _.has(obj2, key)) {
      return `  + ${key}: ${obj2[key]}`;
    }
    if (_.has(obj1, key) && !_.has(obj2, key)) {
      return `  - ${key}: ${obj1[key]}`;
    }
    return `  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}`;
  });
  b.unshift('{');
  b.push('}');
  return b.join('\n');
};

export default getDiff;
