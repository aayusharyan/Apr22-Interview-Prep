//https://leetcode.com/problems/clumsy-factorial/ -> Half part of it.
//Just generating the string of factorial and not the value.
const clumsyFactorial = (n) => {

  let str = n;
  let op  = "*";

  while (n > 1) {
    str = str + op + (n-1);
    switch(op) {
      case '+':
        op = '-';
        break;
      case '-':
        op = "*";
        break;
      case '*':
        op = '/';
        break;
      case '/':
        op = '+';
        break;
      default:
        break;
    }
    n--;
  }

  return str;

}


const output = clumsyFactorial(20);
console.log(output);

//10*9/8+7-6*5/4+3-2*1
//10*9/8+7-6*5/4+3-2*1