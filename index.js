var chalk = require("chalk");
var error = chalk.bold.red;
var warning = chalk.keyword('yellow');
var miles = chalk.dim.green;
// var school = chalk.strikethrough.bold('pink');
// const escapeStringRegexp = require('escape-string-regexp');
// const {stdout: stdoutColor} = require('supports-color');

var message = "Hello " + chalk.yellow("World");
console.log(message);
console.log(error('Error!'));
console.log(warning('Warning!'));
console.log(miles('20'));
// console.log(school("Lighthouse " + chalk.cyan("Labs")));




// module.exports = Chalk(); //eslint-disable-line new-cap
// module.exports.default = module.exports; // For TypeScript
// module.exports.supportsColor = stdoutColor;