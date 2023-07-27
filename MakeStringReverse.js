//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

const string = (input) => {

    let defaultValue = ''

    for ( let index = input.length -1; index>=0; index--) {
        defaultValue += input[index];

       
        
    }

    return defaultValue;


    


}


const result = string('hello world')
console.log(result);