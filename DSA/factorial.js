// Factorial of n -> n * (n-1) * (n-2) * (n-3) * .... 3 * 2 * 1

const factorial = (num) => {
  let fact = 1;
  
  // for(let i =1; i <=num; i++) {
  //   fact = fact * i;
  // }

  for(let i = num; i >= 1; i--) {
    fact = fact * i;
  }

  return fact;
}

console.assert(factorial(2) == 2, "First testcase failed");
console.assert(factorial(3) == 6, "Second testcase failed");
console.assert(factorial(4) == 24, "Third testcase failed");
console.assert(factorial(5) == 120, "Fourth testcase failed");