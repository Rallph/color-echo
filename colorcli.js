#! /usr/bin/env node
// Color-CLI utility
// Made by Ralph Nahra
const chalk = require('chalk');
const cli = require('cli');

cli.parse(
    {
        color: ['c', 'The keyword for the color to be applied to the provided text', 'string', 'orange']
    }
);

let text = cli.args.join(' ');
console.log(chalk.keyword(cli.options.color)(text));

//TODO: Add support for setting a default color stored in a json file
//TODO: Add support for setting color using rgb, hex, etc