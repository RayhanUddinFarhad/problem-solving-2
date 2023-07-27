function calculator(num1, operator, num2) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        return "Invalid operator";
    }
  }
  
  // Test
  console.log(calculator(5, '+', 3)); // Output: 8
  