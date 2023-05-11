alert(
  "we are comparing two numbers to see which one is closer to 100...sounds cool? press ok to give us the  two nos of your choice");
function
 closestTo100(a, b) {
  // Calculate the difference between each value and 100
  let diffX = Math.abs(x - 100);
  let diffY = Math.abs(y - 100);

  // Compare the differences to find the closest value
  if (diffX < diffY) {
    return x;
  } else {
    return y;
  }
}
//let the user enter the two numbers separately and save them...
let x = prompt("Enter the value of first number");
let y = prompt("Enter the value of second number");

console.log(closestTo100(x, y) + " is closer to 100");
