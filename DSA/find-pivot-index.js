// https://leetcode.com/problems/find-pivot-index/ | https://leetcode.com/problems/find-the-middle-index-in-array/
// IP [1,7,3,6,5,6] Index 3 (0, 1, 2) -> [1, 7, 3] == 11; Index (4, 5) -> [5, 6] = 11;
// Output 3;

const findPivot = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let RightSum = 0;
    for(let j = 0; j < i; j++) {
      leftSum += arr[j];
    }

    for(let k = i+1; k < arr.length; k++) {
      RightSum += arr[k];
    }

    if(leftSum == RightSum) {
      return i;
    }
  }
  return -1;
}

console.assert(findPivot([1,7,3,6,5,6]) == 3, "First testcase failed");
console.assert(findPivot([1,2,3]) == -1, "Second testcase failed");
console.assert(findPivot([2,1,-1]) == 0, "Third testcase failed");
console.assert(findPivot([7]) == 0, "Fourth testcase failed");