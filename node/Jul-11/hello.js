
// while (10 < 5) {
//   console.log("Entry controlled Loop");
// }

// do {
//   console.log("Exit controlled loop");
// } while (10 < 5);

//Factorial
// const fact = n => {
//   let number = parseInt(n);
//   if (number > 0) {
//     let f = 1;
//     for(let i = 1; i <= number; i++) {
//       f = f * i; // f *= i;
//     }
//     console.log(`Factorial of ${n} is ${f}`);
//   } else {
//     console.log("Number is not valid");
//   }
// }

// fact(10);

//Palindrome

import fetch from 'node-fetch';
// const fetch = require('node-fetch');

const getEmail = async _ => {
  try {
    const response = await fetch('https://reqres.in/api/users?page=1');
    const parsed = await response.json();


    console.table(parsed.data, ["first_name", "last_name", "email"]);

    // parsed.data.forEach(element => {
    //   console.log(element.email);
    // });
  } catch(e) {
    console.log(e);
    console.log("Something went wrong");
  }
  
}


getEmail();