/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  // Method to add a number to the result
  add(number) {
    this.result += number;
    return this; // Returning this for method chaining
  }

  // Method to subtract a number from the result
  subtract(number) {
    this.result -= number;
    return this; // Returning this for method chaining
  }

  // Method to multiply the result by a number
  multiply(number) {
    this.result *= number;
    return this; // Returning this for method chaining
  }

  // Method to divide the result by a number
  divide(number) {
    // if (number === 0) {
    //   throw new Error("Division by zero is not allowed");
    // }
    if (number === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.result = this.result / number;
    return this; // Returning this for method chaining
  }

  // Method to clear the result
  clear() {
    this.result = 0;
    return this; // Returning this for method chaining
  }

  // Method to get the result
  getResult() {
    return this.result;
  }

  // Method to evaluate a string expression
  calculate(expression) {
    // Remove all non-numeric and non-operator characters except parentheses and spaces
    expression = expression.replace(/[^0-9+\-*/().\s]/g, '');

    // Replace multiple spaces with a single space
    expression = expression.replace(/\s+/g, ' ');


    // Check for division by zero in the expression
    const divisionByZeroRegex = /\/\s*0(?!\d)/;
    if (divisionByZeroRegex.test(expression)) {
      throw new Error("Division by zero is not allowed");
    }

    // Evaluate the expression
    // Note: Using eval is generally not recommended due to security reasons, but for this exercise it is acceptable
    try {
      this.result = eval(expression);
      return this.result;
    } catch (error) {
      throw new Error("Invalid expression");
    }
  }
}
module.exports = Calculator;
