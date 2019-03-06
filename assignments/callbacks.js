// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.



/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
// function getLength(arr, cb) {
//   // getLength passes the length of the array into the callback.
// }


const getLength = (list, callBack) => {
  for (let i = 0; i < list.length; i++) {
    callBack(list[i], i);
  }
};

getLength(items, (lengthofList) => {
  console.log(lengthofList);
});


function last(arr, cb) {
  // last passes the last item of the array into the callback.
}

function showLast(array, callBack) {
  callBack(array[3]);
}
console.log(showLast);


// function sumNums(x, y, cb) {
//   // sumNums adds two numbers (x, y) and passes the result to the callback.
// }
function mathQuestion(num1, num2, callbackFunction) {
  return callbackFunction(num1, num2);
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

console.log(mathQuestion(3,10,add))

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
}
console.log(mathQuestion(3, 10, multiply));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
