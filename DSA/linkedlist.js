// const nodeFactory = () => {
//   return {
//     data: undefined,
//     next: undefined,
//   };
// }

// let i = 1;
// const root = nodeFactory();
// let current = root;

// while (i <= 10) {
//   const node = nodeFactory();
//   node.data = i;

//   current.next = node;
//   current = node;

//   i++;
// }

// current = root;
// while(current.next !== undefined) {
//   console.log(current.data);
//   current = current.next;
// }

// //Add an item to the linked list at the last.
// //data -> 1337

// current = root;
// while(current.next !== undefined) {
//   console.log(current.data);
//   current = current.next;
// }

// //At this point, current should be last element.
// const new_node = nodeFactory();
// new_node.data = 1337;
// current.next = new_node;

// var x = 10;
// function fn() {
//   var x; //x is undefined!
//   console.log(x);
//   let x = 20;
// }

// fn();

// console.log(1 + "2");
// console.log(9 - "5");

// console.log("false" == true);
if("") {
  console.log('Something');
} else {
  console.log("else");
}