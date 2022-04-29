// Two sum -> https://leetcode.com/problems/two-sum/
// Given an array and a target, you need to find the index of elements which add to the target number.
// -> [2, 7, 11, 15], -> 9
// -> [0, 1] //OP

const twoSum = (arr, target) => {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] == target) {
        return [i, j];
      }
    }
  }
  return false;
}


const ip1_1 = [2, 7, 11, 15];
const ip1_2 = 9;
const op1   = [0, 1];


const ip2_1 = [3, 2, 4];
const ip2_2 = 6;
const op2   = [1, 2];

console.assert(JSON.stringify(twoSum(ip1_1, ip1_2)) == JSON.stringify(op1), "First testcase failed");
console.assert(JSON.stringify(twoSum(ip2_1, ip2_2)) == JSON.stringify(op2), "Second testcase failed");