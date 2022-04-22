/*
Leetcode -> https://leetcode.com/problems/valid-mountain-array/
*/


function fn(arr) {
  let isDownhill = false;
  let peak = undefined;
  if(arr.length < 3) {
    return false;
  }
  for(let i = 0; i < arr.length - 1; i++) {
    if(isDownhill) {
      if(!(arr[i+1] < arr[i])) {
        return false;
      }
    } else {
      if(!(arr[i+1] > arr[i])) {
        if(arr[i+1] == arr[i]) {
          return false;
        } else {
          peak = i;
          isDownhill = true;
        }
      }
    }
  }

  if(peak > 0) {
    return true;
  } else {
    return false;
  }
}


console.assert(fn([2,1]) == false, "Testcase 1 failed");
console.assert(fn([3,5,5]) == false, "Testcase 2 failed");
console.assert(fn([0,3,2,1]) == true, "Testcase 3 failed");

console.assert(fn([0,1,2,3,4,5,6,7,8,9]) == false, "Testcase 4 failed");
console.assert(fn([9,8,7,6,5,4,3,2,1,0]) == false, "Testcase 5 failed");