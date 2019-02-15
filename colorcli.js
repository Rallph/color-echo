// Color-CLI utility
// Made by Ralph Nahra
const chalk = require('chalk');

const color = 'blue' || process.argv[3];
const text = process.argv[2];

console.log(chalk.keyword(color)(text));


