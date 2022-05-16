// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89....
// Fibonacci

const fib = (n) => {
  let n1 = 0;
  let n2 = 1;
  let nextTerm;

  for(let i = 0; i <= n; i++) {
    nextTerm = n1+n2;
    n1 = n2;
    n2 = nextTerm;
  }
  console.log(n1);

}
fib(100);
