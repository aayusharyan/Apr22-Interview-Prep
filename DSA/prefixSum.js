//Prefix Sum

//We have an input array => [3, 4, 5, 10, 1, 2, 17];
//ip => [3, 4, 5,  10, 1,  2,  17]
//op => [3, 7, 12, 22, 23, 25, 42]
//We need to calculate the output array based on a logic:
//op[i] = ip[0] + ip[1] + ip[2] + ip[3] ... ip[i];

// const prefix = (arr) => {
//   let op = [];
  
//   for(let i = 0; i < arr.length; i++) {
//     let sum = 0;  
//     for(let j = 0; j <= i; j++) {
//       sum += arr[j];
//     }

//     op[i] = sum;
//   }

//   return op;
// }


const prefix = (arr) => {
  if(arr.length == 0) { return []; }

  let op = [ arr[0] ];
  
  for(let i = 1; i < arr.length; i++) {
    op[i] = op[i - 1] + arr[i];
  }

  return op;
}

const ip = [3, 4, 5,  10, 1,  2,  17];
const op = [3, 7, 12, 22, 23, 25, 42];

console.assert(JSON.stringify(prefix(ip)) == JSON.stringify(op), "First testcase failed");

const ip2 = [];
const op2 = [];
console.assert(JSON.stringify(prefix(ip2)) == JSON.stringify(op2), "Second testcase failed");