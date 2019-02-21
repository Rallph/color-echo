#! /usr/bin/env node
// Color-CLI utility
// Made by Ralph Nahra
const chalk = require('chalk');
const cli = require('cli');

cli.parse(
    {
        color: ['c', 'The keyword for the color to be applied to the provided text', 'string', 'orange'],
        hex: ['h', 'The hex code of the color to be applied to the provided text. Do not include #', 'string', false],
    }
);

let applyColor = () => {};

if (cli.options.hex) {
    applyColor = chalk.hex('#' + cli.options.hex);
} else {
    applyColor = chalk.keyword(cli.options.color);
}

let text = cli.args.join(' ');
console.log(applyColor(text));

