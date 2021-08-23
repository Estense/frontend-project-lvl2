import { test, expect } from '@jest/globals';
import { getExtension } from '../src/filePaths.js';

// test('getData', () => {
//   const data = {
//     host: 'hexlet.io',
//     timeout: 50,
//     proxy: '123.234.53.22',
//     follow: false,
//   };
//   expect(getData('./__fixtures__/file1.json')).toEqual(data);
// });

test('getExtension', () => {
  expect(getExtension('')).toEqual('');
  expect(getExtension('file1.json')).toEqual('json');
  expect(getExtension('file2.yaml')).toEqual('yml');
  expect(getExtension('file.yml')).toEqual('yml');
});
