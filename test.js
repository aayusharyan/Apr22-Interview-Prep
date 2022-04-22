const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });


const print_name = (name) => {
  console.log(`Hello ${name}!`);
}


rl.question('Enter your name: ', name => {
  print_name(name)
  rl.close();
});
