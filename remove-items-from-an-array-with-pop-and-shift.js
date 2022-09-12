// function popShift(arr) {
//   let shifted = arr.pop(); // Change this line
//   let popped = arr.shift(); // Change this line
//   return [shifted, popped];
// }

// console.log(popShift(['challenge', 'is', 'not', 'complete']));

function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}

// do not change code below this line
console.log(popShift(["challenge", "is", "not", "complete"]));