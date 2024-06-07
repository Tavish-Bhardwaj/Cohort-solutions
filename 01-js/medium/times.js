/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateSumTime(n) {
    // Record the start time
    const startTime = new Date();
  
    // Calculate the sum from 1 to n
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
  
    // Record the end time
    const endTime = new Date();
  
    // Calculate the time difference in seconds
    const timeTaken = (endTime - startTime) / 1000;
    
    // Return the time taken and the sum (to ensure the calculation happens)
    return { timeTaken, sum };
  }
  
  // Test cases
  console.log('Sum from 1-100:', calculateSumTime(100)); // Output: { timeTaken: X seconds, sum: 5050 }
  console.log('Sum from 1-100000:', calculateSumTime(100000)); // Output: { timeTaken: Y seconds, sum: 5000050000 }
  console.log('Sum from 1-1000000000:', calculateSumTime(1000000000)); // Output: { timeTaken: Z seconds, sum: 500000000500000000 }
  