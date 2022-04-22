const DIRECTION_TOP    = 1;
const DIRECTION_LEFT   = 2;
const DIRECTION_BOTTOM = 3;
const DIRECTION_RIGHT  = 4;

// const n = prompt("Enter the size");
const n = 7;
console.log(n);

let direction = DIRECTION_TOP;
let row    = 0;
let column = 0;
let arr = [];
// let arr    = (new Array(n)).fill((new Array(n)).fill(undefined));
for(let i = 0; i<n; i++) {
	arr[i] = [];
  for(let j=0; j < n; j++) {
    arr[i][j] = undefined;
  }
}
// console.log(arr);

for(let i = 1; i <= n*n; i++) {
  arr[row][column] = i;
  
  switch(direction) {
  	case DIRECTION_TOP:
    	if((row - 1) < 0 || arr[row - 1][column] != undefined) {
      	direction = DIRECTION_RIGHT;
      }
      break;
    case DIRECTION_LEFT:
    	if((column - 1 < 0) || arr[row][column - 1] != undefined) {
      	direction = DIRECTION_TOP;
      }
      break;
    case DIRECTION_BOTTOM:
    	if((row + 1) >= n || arr[row + 1][column] != undefined) {
      	direction = DIRECTION_LEFT;
      }
      break;
    case DIRECTION_RIGHT:
    	if((column + 1) >= n || arr[row][column + 1] != undefined) {
        direction = DIRECTION_BOTTOM;
      }
      break;
    default:
    	break;
  }
  
  switch(direction) {
  	case DIRECTION_TOP:
    	row--;
      break;
    case DIRECTION_LEFT:
    	column--;
      break;
    case DIRECTION_BOTTOM:
    	row++;
      break;
    case DIRECTION_RIGHT:
    	column++;
      break;
    default:
    	break;
  }
}

let output = "";
for(let i = 0; i < arr.length; i++) {
  const row = arr[i];
  if(i == 0) {
    output = output + row.join("  ");
  } else {
    output = output + row.join(" ");
  }
  output = output + "\n";
}
console.log(output);