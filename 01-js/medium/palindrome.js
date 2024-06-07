/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Reverse the cleaned string
  const reversedStr = cleanedStr.split('').reverse().join('');
  
  // Check if the cleaned string is equal to the reversed cleaned string
  return cleanedStr === reversedStr;
}

// Test cases with special cases handled
console.log(isPalindrome("Nan")); // Output: true
console.log(isPalindrome("Racecar")); // Output: true
console.log(isPalindrome("Hello")); // Output: false
console.log(isPalindrome("A man a plan a canal Panama")); // Output: true
console.log(isPalindrome("")); // Output: true
console.log(isPalindrome("No 'x' in Nixon")); // Output: true


module.exports = isPalindrome;
