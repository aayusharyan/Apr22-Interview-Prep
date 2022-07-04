# Jul-04, 2022


console.log(018 - 015); //5
console.log(18 - 15); //3
console.log(010 - 001);

0<number>  -> octal

ES6 introduced more number systems:
0b -> binary
0o -> octa
0x -> Hexa

//First class fuction
- A first class function is a function that can be treated as a variable.
const fn = function() {console.log("Hello World"); }

fn2(fn);
obj.k = fn;
fn3() {
  return fn;
}