import path from 'path';

export const getPath = (fileName) => path.resolve(fileName);

export const  getExtension = (fileName) => {
  if (fileName.endsWith('.json')) {
    return 'json';
  }
  if (fileName.endsWith('.yaml') || fileName.endsWith('.yml')) {
    return 'yml';
  }
  return '';
};
