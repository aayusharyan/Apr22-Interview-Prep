// function array1(arr, search_key) {
//   let locations = [];
//   arr.forEach((elem, idx) => {
//     if(elem == search_key) {
//       locations.push(idx);
//     }
//   })
//   return [locations[0], locations[locations.length - 1]];
// }


function array1(arr, search_key) {
  let locations = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == search_key) {
      locations.push(i);
    }
  }
  console.log(locations);
  return [locations[0], locations[locations.length - 1]];
}

//TC -> O(n)

const ip1 = [4, 5, 2, 1, 2, 8, 7, 3, 2, 9, 11];
const ip2 = 2;
const op = [2, 8]

//Testing
console.assert(JSON.stringify(array1(ip1, ip2)) == JSON.stringify(op), "Testcase 1 failed");