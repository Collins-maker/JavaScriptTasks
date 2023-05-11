function closestTo100(a, b) {
    // Calculate the difference between each value and 100
    let diffA = Math.abs(a - 100);
    let diffB = Math.abs(b - 100);
  
    // Compare the differences to find the closest value
    if (diffA < diffB) {
      return a;
    } else {
      return b;
    }
  }
  let a=prompt("Enter the value of first number");
  let b=prompt("Enter the value of second number");

  console.log(closes90tTo100(a,b));
  