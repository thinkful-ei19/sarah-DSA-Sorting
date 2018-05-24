'use strict';

// Sort in place
// Write an algorithm to shuffle an array into a random order in-place (i.e. without creating a new array).

function shuffle(arr) {
  let currIndex = arr.length, tempValue, randomIndex;

  //while elements remain that have not yet been shuffled
  while (currIndex !== 0) {
    //pick element to shuffle
    randomIndex = Math.floor(Math.random() * currIndex);
    currIndex --;

    //swap reamining element with current element
    tempValue = arr[currIndex];
    arr[currIndex] = arr[randomIndex];
    arr[randomIndex] = tempValue;
    console.log(tempValue, currIndex, randomIndex);
  }
  return arr;
}

const myArray = [5, 77, 62, 8, 23, 14];
console.log(shuffle(myArray));
console.log(shuffle(myArray));
console.log(shuffle(myArray));

