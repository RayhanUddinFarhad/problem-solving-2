//Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 


const numbers = (arr) => {

    const positiveNumbers = arr.filter (arr => arr>0)

    return positiveNumbers.reduce ((prev, curr) => prev + curr, 0)


}

const arrays = [2, -5, 10, -3, 7]
console.log(numbers(arrays));