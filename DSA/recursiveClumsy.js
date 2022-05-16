const recursiveClumsy = (n, op) => {
  var str = n;

  if(op == undefined) {
    var op  = "-";
  }

  if(n == 1) {
    return "1";
  }

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
  return str + op + recursiveClumsy(n-1, op);
}

console.log(recursiveClumsy(10));

//10*9/8+7-6*5/4+3-2*1