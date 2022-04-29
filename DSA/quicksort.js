const quicksort = (arr) => {
  let pivot = Math.floor(Math.random() * arr.length);
  
}


const ip1 = [3, 5, 7, 8, 1, 2, 4, 9, 6];
const op1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.assert(JSON.stringify(quicksort(ip1)) == JSON.stringify(op1), "First testcase failed");