const mem = [];

const recursiveFib = (n) => {
  if(mem[n] !== undefined) {
    return mem[n];
  }
  
  if(n <= 1) {
    mem[n] = 1;
    return 1;
  }

  const n1 = recursiveFib(n - 1);
  const n2 = recursiveFib(n - 2);
  const sum = n1 + n2;
  mem[n] = sum;
  return sum;
}

console.log(recursiveFib(100));