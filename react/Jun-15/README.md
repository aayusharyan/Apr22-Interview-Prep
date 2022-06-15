## Jun-15, 2022

1. Stateful vs Stateless components.

-> Any component that has state in it, is referred to as a stateful component. If a component does not have any state, then it is referred as a stateless component.

2. Pure component vs impure component

If a component is dependent ONLY on the props then it is referred as a Pure component.
Otherwise, it is referred as an impure component.


3. Pure function vs Impure funciton.

A pure function will ALWAYS give the same result when called multiple times with the same attributes.
A pure function will ALWAYS give the same result even if it is shifted to another place. A pure function DOES NOT depend on any data other than the parameters.
If a function is not doing that, then it is an IMPURE function.

--------
const fn = (a, b) => {
  return a + b;
}

fn(2, 10);
//Pure
--------
const fn = _ => {
  return Math.random();
}
fn();
//Impure because different values from calling multiple times.
--------
const fn = a => {
  a[0] = a[0] + 1;
  return (a);
}
fn([10]);
//Impure because it is changing the value of a reference data type.
--------
const fn = a => {
  const b = a[0] + 1;
  return (b);
}
fn([10]);
//Pure
--------
const a = [10, 12, 14];
const fn = () => {
  return (a);
}
fn();
//Impure function because it is accessing a variable outside of it's scope.
--------
const fn = (a) => {
  return (a+b);
}
const b = 2;
fn(5);
//Impure function because it is dependent on a variable b, that is outside of the function.
--------
const fn = () => {
  document.getElementById("jdfhgjkdhg");
}
fn();
//Impure function because it is accessing variable document which is outside of dom.
--------
consn fn = _ => { console.log("ABCD"); }
//Impure because accessing console.
--------
const fn = (a) => {
  for(let i = 0; i < a.length; i++) {
    a[i] = a[i] + 1;
  }
}

fn([10, 11, 12]);
//Impure function.
--------

We want pure functions because we can move them ANYWHERE in our code and they will not break.
1. Pure function always will give the same value.
2. Pure function NEVER depends on anything outside.
3. Pure function DOES NOT change the state of whatever is passed.



4. Controlled Components vs Uncontrolled Components.
- A controlled component is dependent on the parent. Basically, dependent on the props passed to it.

//Component is Controlled, input is Controlled
const Component = ({ value, setValue }) => {
    return (
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
    )
}


//Component is Uncontrolled, input is Controlled
const Component = () => {
    const [value, setValue] = useState("");
    return (
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
    )
}

//Component is Uncontrolled, input is Uncontrolled
const Component = () => {
    const inputRef = useRef();
    return (
      <input type="text" ref={inputRef} />
    )
}
