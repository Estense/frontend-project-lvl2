import { test, expect } from '@jest/globals';
import { yamlParse, jsonParse } from '../src/parsers.js';

const data = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};

test('yamlParse', () => {
  expect(yamlParse('./__fixtures__/file1.yaml')).toEqual(data);
});

test('jsonParse', () => {
  expect(jsonParse('./__fixtures__/file1.json')).toEqual(data);
});
