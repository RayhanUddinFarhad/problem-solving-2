//Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3


function findMostFrequentElement(array) {
    const frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentElement;
  
    for (let element of array) {
      frequencyMap[element] = (frequencyMap[element] || 0) + 1;
      if (frequencyMap[element] > maxFrequency) {
        maxFrequency = frequencyMap[element];
        mostFrequentElement = element;
      }
    }
  
    return mostFrequentElement;
  }
  
  console.log(findMostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5])); // Output: 3
  