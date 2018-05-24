'use strict';

// Bucket sort
// Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are.

// Create bucketSort function (array, bucket size)
//   Create vars for i, min, max, and bucket size (we already have min and max)
//   Find min and max value (they are given in this case)
//   Create amount of buckets
//   Push values to correct buckets 
//   Sort buckets

//below sort function does not account for duplicates
function bSort(arr, min, max) {
  //get count of number of n # ofbuckets
  let bCount = max - min +1;
  console.log(bCount);
  //create bcount size empty new array
  let bArray = new Array(bCount);
  console.log(bArray);
  //create empty array to push results into
  let sortedArray = [];
  //loop through array and push into buckets array
  for(let i = 0; i<arr.length; i++) {
    // if (bArray[arr[i] - min] == null) {
      bArray[arr[i]-min] = arr[i];
    // } 
    // else {
    //   bArray[arr[i]-min] = arr[i +1];
    // }
  }
  // console.log(bArray);
  // loop through bArray and push to sorted array
  for(let j = 0; j < bArray.length; j++) {
    if (typeof bArray[j] === 'number') {
      sortedArray.push(bArray[j]);
    }
  }
  console.log(sortedArray);
  return sortedArray;
}


console.log(bSort([9, 5, 73, 6, 22, 55, 19], 6, 73));
