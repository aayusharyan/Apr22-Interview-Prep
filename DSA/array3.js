/*
  Write a program to calculate the count of peak elements in an array.
  Peak elements -> [0, 5, 4, 3, 8, 5, 4]
  Element on the left and the right should be less than me.
  OP -> 2
*/

function peak(arr) {
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    if(i == 0) {
      if(arr[i + 1] < arr[i]) {
        count++;
      }
    } else if(i == arr.length - 1) {
      if(arr[i - 1] < arr[i]) {
        count++;
      }
    } else {
      if(arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) {
        count++
      }
    }
  }
  return count;
}

//TC -> O(n)

const ip = [0, 5, 4, 3, 8, 5, 4]
const op = 2;

console.assert(peak(ip) == op, "Testcase 1 failed");