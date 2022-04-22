1. Complexities.
2. Some examples of calculating time complexities.
3. 

Asymptotic Notation -> It is used to describe the execution time (running time) of an algorithm -> Based on an input of size n, how many steps will it take with respect to n. There are three different asymptotic notations:

Best Case    -> The minimum steps your logic will take to execute -> Ω (Omega)
Average Case -> The average steps your logic will take to execute -> θ (Theta)
Worst Case   -> The maximum steps your logic will take to execute -> O (Big Oh)

Simplification of Asymptotic Notation. (Asymptotic Analysis)
n^2 + 2n + 1 -> n^2
100n^5 + 4n^3 + 2n + 43 -> n^5

Quadratic   -> n^2 (n = 10 -> 100,  n = 30 => 900)
Exponential -> 2^n (n = 10 -> 1024, n = 30 => 1073741824)

a. Intro of the Problem. (10m)
b. Brainstorming the solution. (20-25m)
c. Complexity discussion. (5-10m)
d. Optimization. (10-15m)

Definitions:

Complexity -> The complexity of an algorithm is measured in terms of how much time it takes (in terms of steps) and how much space/memory it takes (in terms of data).

Time Complexity
Space Complexity


```
var sum = function(num1, num2) {
    return num1 + num2;
};
```

1 -> Time complexity -> 1 step needed to reach the output.


Q. Return the first element from the given array.
```
function q1(arr) {
  return arr[0];
}
```
arr -> 10 => 1 step.
arr -> 100 => 1 step.
arr -> 1000 => 1 step.

Constant Time complexity. 1

Q. Return the sum of all elements of the given array.
```
function q2(arr) {
  let sum = 0;
  for(let i =0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
```
arr -> 5 => 5 + 1 steps
arr -> 10 => 10 + 1 steps
arr -> 100 => 100 + 1 steps

Linear Time Complexity. n

Q. Get maximum (greatest) number from an array.
```
function q3(arr) {
  let max = 0;
  for(let i =0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
```
arr -> 4 -> [0,1,2,3] -> 4 steps
arr -> 4 -> [3,2,1,0] -> 2 steps


arr -> 100000 -> worst case -> 100000 steps
                 best case  -> 2 steps

Time complexity -> Ω (2 steps), O (100000 steps).


Best Case -> The minimum steps your logic will take to execute -> Ω (Omega)
Worst Case -> The maximum steps your logic will take to execute -> O (Big Oh)
Average Case -> The average steps your logic will take to execute -> θ (Theta).

Code

for(let i = 0; i < arr.length; i += 2) {
  sum = sum + arr[i]
}

-> arr = 10 -> 5 steps
-> arr = 100 -> 50 steps
TC -> n / 2 -> 1/2 of n.

Q. WAP to find sum of all even numbers from an array.
```
function q4(arr) {
  let sum = 0;
  for(let i =0; i< arr.length; i++) {
    if(arr[i] % 2 == 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}
```
O(n), Ω(1)

arr -> 5 -> [2,4,6,8,2] => 6 steps
arr is n size ALL even numbers -> n + 1
Worst case -> O(n)
arr -> 5 -> [1,3,5,7,9] => 1 steps
arr is n size ALL odd numbers -> 1 step
Best Case -> Ω(1)

Q. Print a spiral matrix of size n x n
n = 5

1  2  3  4  5
16 17 18 19 6
15 24 25 20 7
14 23 22 21 8
13 12 11 10 9


Q. Print inverse  (Assignment)
n = 5

17 18 19 20 21
16 5  6  7  22
15 4  1  8  23
14 3  2  9  24
13 12 11 10 25

Quadratic Time Complexity -> O(n^2)


Apr -22

Q. We have an array. Find the index of the given element for 2 things
First occurence, last occurence

-> [2, 4, 5, 1, 10, 8, 7, 3, 2, 9, 11]
-> 2
-> [0, 8]

```
function q1(arr, search_key) {
  return [0, 0];
}

```