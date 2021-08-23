import getDiff from "./diffs.js";
import { getPath, getExtension } from "./filePaths.js";
import { yamlParse, jsonParse } from "./parsers.js";

const genDiff = (fileName1, fileName2) => {
 const obj1 = getExtension(fileName1) === 'json' ? jsonParse(getPath(fileName1)) : yamlParse(getPath(fileName1));
 const obj2 = getExtension(fileName2) === 'json' ? jsonParse(getPath(fileName2)) : yamlParse(getPath(fileName2));
 return getDiff(obj1, obj2)
};

export default genDiff;