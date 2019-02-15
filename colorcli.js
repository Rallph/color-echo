#! /usr/bin/env node
// Color-CLI utility
// Made by Ralph Nahra
const chalk = require('chalk');
const fs = require('fs');

let config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

const color = config.color || process.argv[3] || "blue";
const text = process.argv[2] || "";

if (text == "setcolor") {
    config.color = process.argv[3];
    fs.writeFile('./config.json', JSON.stringify(config), err => {
        if (err) throw err;
        console.log(`Default color has been set to ${process.argv[3]}`);
    });
} else {

    console.log(chalk.keyword(color)(text));
}

