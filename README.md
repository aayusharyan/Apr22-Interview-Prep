## April 22 - Interview Preparation

FE Onboarding Plan -> https://docs.google.com/document/d/1jDwzOmgAsV6EsunUzYnwXi039_RH5XJVv1mecEVwQk4/edit

Planner -> https://docs.google.com/spreadsheets/d/1FSTf6SvwpUBV5MLKN97iojjrWlzQ0w6J9tocVQYBRdE/edit#gid=0

Notes -> https://docs.google.com/document/d/1Wq3HDYC0aINXBwRKJGT6RMtQf7B4qNLcPtnz42_LFSk/edit

//Polyfill
if(!Math.trunc) {
  Math.prototype.trunc = function(data) {
    //Logic here...
  }
}

Math.trunc(); //ES6

//Reduce -> Reduce the dimensionality. 
Simple example -> Calculate sum of all elements of an array.
const arr = [1, 2, 3, 4, 5, 6];
arr.reduce(function(a, b) {
  return a + b;
}, 0);

const arr = [1,2,3,4,5,6,7,8,9];
//Filter and get only even numbers.
const arr2 = arr.filter(function(element) {
  if(element % 2 == 0) {
    return true;
  }
  return false;
});

arr2; //Only even numbers.