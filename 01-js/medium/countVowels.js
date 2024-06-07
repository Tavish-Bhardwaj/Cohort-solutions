/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
function countVowels(str) {
  // Define a string containing all the vowels
  const vowels = 'aeiouAEIOU';
  let count = 0;
  
  // Loop through each character in the input string
  for (let char of str) {
    // Check if the character is a vowel
    if (vowels.includes(char)) {
      count++;
    }
  }
  
  return count;
}

// Test cases
console.log(countVowels("Hello World")); // Output: 3
console.log(countVowels("JavaScript")); // Output: 3
console.log(countVowels("OpenAI")); // Output: 3
console.log(countVowels("AEIOU aeiou")); // Output: 10
console.log(countVowels("bcdfghjklmnpqrstvwxyz")); // Output: 0

module.exports = countVowels;