#!/usr/bin/env node

import yargs from '../node_modules/yargs/index.cjs';
import chalk from 'chalk';
import boxen from 'boxen';
import translate from 'translate';

const usage = chalk.grey("\nUsage: mycli -l <language>  -s <sentence> \n"
  + boxen(chalk.green("\n" + "Translates a sentence to specific language" + "\n"), {padding: 1, borderColor: 'green', dimBorder: true}) + "\n");

const options = yargs
  .usage(usage)
  .option('l', {alias:'language', describe: 'Translate to language', type: 'string', demandOption: true })
  .option('s', {alias:'sentence', describe: 'Sentence to be translated', type: 'string', demandOption: true })
  .help(true)
  .argv;

translate(options.sentence, {to: options.language})
  .then(res => {
    console.log("\n" + boxen(chalk.green("\n" + res + "\n"), {padding: 1, borderColor: 'green', dimBorder: true}) + "\n");
  })
  .catch(err => {                            
      console.error(err);  
  });
