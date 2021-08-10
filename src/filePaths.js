import fs from 'fs';
import path from 'path';

const getPath = (fileName) => path.resolve(fileName);

const getData = (fileName) => {
  const coding = 'utf8';
  const filePath = getPath(fileName);
  return JSON.parse(fs.readFileSync(filePath, coding));
};

export default getData;
