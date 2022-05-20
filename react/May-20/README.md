# May-20, 2022

1. Props. (Prop drilling)

Prop drilling is the approach that we do to send data from one component to it's descendant. (Not immediate child). 
Grand Parent (Generate it) -> Parent -> Current -> Child -> Grandchild (use it)

2. Event Listeners (Callback handlers)

-> This can also be used to send data from the child to the parent using Callback approach.


3. State
-> State is data of a component (object). This helps in react tracking changes on that data. So, if that state variable changes, we can update the document directly.

4. hooks -> Special functions built into React.

5. Array Destructuring -> ES6
const arr = [1, 2, 3];

/* const a = arr[0];
const b = arr[1];
const c = arr[2]; */

const [a, b, c] = arr;

console.log(a, b, c);

4. Form Validation (Password and Confirm password match or not).


Additionally :
1. Virtual DOM - Theoretical


Magical Scripts ✨:

<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

function() {
  hjkhgdkjhgdg
  dfgkjhdkjfgj
  dfgjhk
}

() => {
  step1();
  step2();
  step3();
}

() => { step1(); step2(); step3(); }

() => step1();

() => console.log("Hi")

Concept No. 1
-> If we have single step, the curly brackets can be removed.
----------------------

(param1) => {
  dfsdf
}

param1 => {

}

(p1, p2) => { }

Concept No. 2 - If we have single parameter, the round brackets can be removed
-------------------


const _  = "something";
console.log(_);

Concept No. 3 - _ is a perfectly fine variable name;

---------------------
Combine 1 + 2 + 3

_ => console.log("Hello")


NOTE - DO NOT TRY TO MANIPULATE DOM DIRECTLY.
addEventListener ❌


Assignment:
----------
1. Create an application, it should have 1 button and 2 components. By default, show component 1, if I click on the button, show component 2, if I click on the button again, show component 1 and if click again, show 2, again, show 1 and keep toggling between component 1 and 2.