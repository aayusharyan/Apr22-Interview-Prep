const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function createNode(data) {
  // if(typeof data !== "string") {
  //   return null;
  // }

  return {
    next: undefined,
    data: data
  };
}

let root = createNode();

function insert() {
  readline.question(`Enter the data? `, data => {
    let current = root;
    while(current.next !== undefined) {
      current = current.next;
    }

    const newNode = createNode(data);
    current.next = newNode;
    // current = newNode;
    current = current.next;
    printMenu();
  });
}

function traverse() {
  let current = root.next;
  while(current !== undefined) {
    console.log(current.data);
    current = current.next;
  }
  printMenu();
}

function reverse() {

  // next = current.next;
  // current.next = prev;
  // prev = current;
  // current = next;

  let current = root.next;
  let revsersedListHead = undefined;
  let pendingListHead = undefined;
  while(current !== undefined) {
    pendingListHead = current.next;
    current.next = revsersedListHead;
    revsersedListHead = current;
    current = pendingListHead;
  }
  root = createNode();
  root.next = revsersedListHead;
  current = revsersedListHead;

  // while(current !== undefined) {
  //   console.log(current.data);
  //   current = current.next;
  // }

  printMenu();
}

function prepend() {
  readline.question(`Enter the data? `, data => {
    const newNode = createNode(data);
    newNode.next = root.next;
    root.next = newNode;
  });
}

function printMenu() {
  readline.question(`What do you want to do (insert/prepend/traverse/reverse/exit)? `, data => {
    switch(data) {
      case 'insert':
        insert();
        break;
      case 'prepend':
        prepend();
        break;
      case 'traverse':
        traverse();
        break;
      case 'reverse':
        reverse();
        break;
      case 'exit':
        break;
      default:
        console.log("Invalid input, please try again");
        printMenu();
        break;
    }
  });
}

printMenu();



