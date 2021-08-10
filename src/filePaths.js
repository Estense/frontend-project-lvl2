import fs from 'fs';
import path from 'path';


const getPath = (fileName) => path.resolve(fileName);


const getData = (fileName) => {
  const coding = 'utf8';
  const path = getPath(fileName);
  console.log(path);
  return JSON.parse(fs.readFileSync(path, coding));
};

export default getData;


