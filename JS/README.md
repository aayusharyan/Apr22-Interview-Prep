Q. What is an Array in JS?
-> Array is a Datastructure which stores the elements.(Arrays are an Object in JS).
In terms of DSA, Arrays are homogenous, but technically in JS, arrays are heterogenous.

Homogenous -> Collection of same type of data. (Uniform)
Heterogenous -> Collection of different type of data. (Non uniform)

Generally, arrays are preferred when we have similar type of data.
When we have mixed data, objects are preferred.


Q. What is dimension of an array?
-> The number of indices required to access any element.

const arr = [
  [1, 2, 3],
  [1, 2, 3, 4],
  [1, 2, 3]
]

Pattern questions.

A simple right angled triangle.
If n = 7

      *
     **
    ***
   ****
  *****
 ******
*******

<!-- Objects are key value pairs in JS. -->

What is an Object from JS Point of View?
In JS, objects are non primitive Data types. It is standalone entity. It is a collection of key value pairs. It is heterogenous. It can contain anything (incl. functions). In JS, everything is a object.

What is an Object from OOP Point of View?
It is a type of datastructure. It is an instance of a class. It contains methods and data members.


What is OOP?
Object Oriented Programming.

Factory approach to OOP.

//Library management system.
//Books -> Each book will have it's own object.
//Factory function. This function will create a new book object and return that.

What is `this` keyword?
-> It points to the owner (parent) object.

<Datatype>.prototype
Array
String
Boolean


Array.prototype.custom_fn = function() { console.log("Hey geeks"); }

Prototype -> It is a mechanism (object, way) using which JS objects have their functionalities. This also includes inheritance from parent object.

//Create a prototype function to check whether an element exists in an array or not.
const arr = [1, 2, 3, 4, 5];
arr.check(10); //false
arr.check(2);  //true 

Array.prototype.check = function(data) {
    for(let i = 0; i < this.length; i++) {
        if(this[i] == data) {
            return true;
        }
    }
    return false;
}

Q. What are 4 pillars of OOP?
1. Polymorphism -> A single function which can behave differently based on different situations. (A same thing, different forms).
2. Inheritance -> The approach with which the child class can access the parent's (grandparents, great grandparents) data members and member functions. But parent cannot access child's things.
3. Abstraction -> It is the concept of hiding what is not required. Unnecessary information (data members and member functions).
4. Encapsulation -> Combining / Bundling data members and member functions together in an object. The consumer does not need to care and combine everything by themselves.



call / apply / bind.
Customizing what the this keyword will point to. 

```
function something(a, b, c) {
	console.log(this, a, b, c);
}
const obj = {
   fname: "Aayush",
   lname: "Sinha"
};
/* something(10); */
/* something.call(obj, 10, "aaa", false); */
/* something.apply(obj, [10, "aaa", false]); */
const fn = something.bind(obj);
/* console.log(fn); */
fn(10, "aaa", false);
```

Multiple Inheritance -> 1 child having more than 1 parent.
Single Inheritance -> 1 child having only 1 parent.
Multi Level Inheritance -> Decendand relations in inheritance.
Hierarchical Inheritance -> 1 parent having more than 1 child.
Hybrid Inheritance -> Combination of more than 1 from the above 4.

Prototypal Inheritance (Prototype Chain) -> Inheritance using prototypes (before ES6 era).

Magazine.prototype = Object.create(Book.prototype);
Magazine.prototype.mag_fn = function() { ... };