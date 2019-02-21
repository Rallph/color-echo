# Color CLI 
A simple node.js utility for printing colored output to the terminal

Originally made for practice with node.js

Currently supports CSS keywords and hex color codes

## Usage
```
Usage:
  colorcli.js [OPTIONS] [ARGS]

Options: 
  -c, --color [STRING]   The keyword for the color to be applied to the provided 
                         text  (Default is orange)
  -h, --hex STRING       The hex code of the color to be applied to the provided 
                         text. Do not include #
```

### Examples:

```
./colorcli.js testing -c red 
```
prints "testing" in the color red on a new line

```
./colorcli.js testing -h 32dbc6
```
prints "testing" in the color with hex code #322dbc (a cyan color). Note that the # symbol must be absent.

#
## Future plans

Support rgb, hsl color modes
Support using a default color defined in a file
Support piping input from stdout


Made by Ralph Nahra
