
// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const numbers = (array) => {


    const result = array.sort((a,b) => a-b)


    return result[1]

}

const result = [8, 2, 46, 1,345, 3, 7,18]

console.log(numbers(result));