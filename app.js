//Solution 1
const chalk = require('chalk');

const helloBlue = () => {
  console.log(chalk.blue('Hello world'));
}
helloBlue();

//Solution 2
const helloRed = () => {
  console.log(chalk.red('Hello world'));
}
helloRed();

// Solution 3
const stringToColor = (str, color) => {
  console.log(chalk.keyword(color)(str));
}
stringToColor('this is a test', 'green');

//Solution 4
const evensBlueOddsYellow = (str) => {
  let splited = str.split(' ');
  for (let i = 0; i < splited.length; i++) {
    i % 2 ? console.log(chalk.yellow(splited[i])) : console.log(chalk.blue(splited[i]));
  }
}

evensBlueOddsYellow('this is a test');

//Solution 5
const angryText = str => {
  console.log(chalk.red.bold.underline(str.toUpperCase()));
}

angryText('this is still a text');

//Solution 6
const backgroundCyan = str => {
  console.log(chalk.white.bgCyan(str));
}

backgroundCyan("Another test");

//Solution 7
const boldFirstUnderlineLast = str => {
  console.log(chalk.bold(str[0]) + str.slice(1, str.length-1) + chalk.underline(str[str.length - 1]));
}

boldFirstUnderlineLast('Hello World');

//Solution 8
const commandLineChalk = (color) => {
  console.log(chalk.keyword(color)(process.argv));
}

commandLineChalk('yellow');
