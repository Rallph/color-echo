#! /usr/bin/env node
// Color-CLI utility
// Made by Ralph Nahra
const chalk = require('chalk');
const fs = require('fs');

let config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

const color = config.color || process.argv[3] || "blue";
const text = process.argv[2] || "";

console.log(chalk.keyword(color)(text));


