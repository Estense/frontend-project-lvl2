#!/usr/bin/env node

import program from 'commander';
import genDiff from '../src/getDiff.js';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference')
  .option('-f --format <type>', 'output format')
  .arguments('<fileName1> <fileName2>')
  .action((fileName1, fileName2) => {
    console.log(genDiff(fileName1, fileName2));
  });

program.parse(process.argv);
