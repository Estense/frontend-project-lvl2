import { test, expect } from '@jest/globals';
import getData from '../src/filePaths.js';

const data = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};

test('getData', () => {
  expect(getData('./__fixtures__/file1.json')).toEqual(data);
});
