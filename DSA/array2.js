/*
  Arr2 -> Given an array -> Tell the difference between maximum and minimum of that array.
  
  [2, 4, 9, 10, 1, 8, 12, 11, 7, 5, 8]
  -> 12 - 1 -> 11
*/
function fn(arr) {
  let min = arr[0];
  let max = arr[0];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }

    if(arr[i] < min) {
      min = arr[i];
    }
  }
  return max - min;
}


const ip = [2, 4, 9, 10, 1, 8, 12, 11, 7, 5, 8];
const op = 11;

console.assert(fn(ip) == op, "Testcase 1 failed");