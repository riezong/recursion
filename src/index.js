import "./styles.css";

// Fibonacci

function fibs(sequenceLength) {
  const fib = [0, 1];
  let prev = 0;
  let next = 1;
  while (fib.length < sequenceLength) {
    let sum = prev + next;
    prev = next;
    next = sum;
    fib.push(next);
  }
  console.log(fib);
}

// fibs(8);

function fibsRec(sequenceLength) {
  console.log("This was printed recursively");

  // Base
  if (sequenceLength <= 1) return [0];
  if (sequenceLength === 2) return [0, 1];

  // Recursion
  let smallerSequence = fibsRec(sequenceLength - 1);
  // console.log(smallerSequence);
  let nextFibNumber =
    smallerSequence[smallerSequence.length - 1] +
    smallerSequence[smallerSequence.length - 2];
  smallerSequence.push(nextFibNumber);
  return smallerSequence; // Return the modified array

  // let sum = fibsRec(sequenceLength - 1) + fibsRec(sequenceLength - 2);
}

// console.log(fibsRec(8));

// Merge sort

function mergeSort(arr) {
  // Base
  let arrayLength = arr.length;
  if (arrayLength < 2) {
    // console.log(arr);
    return arr;
  }

  // Recursion
  // split array in half
  // console.log("split array in half");
  const midIndex = Math.floor(arrayLength / 2);
  const leftHalf = arr.slice(0, midIndex);
  const rightHalf = arr.slice(midIndex, arrayLength);

  console.log(leftHalf, rightHalf);
  let sortedLeft = mergeSort(leftHalf);
  console.log(sortedLeft);
  let sortedRight = mergeSort(rightHalf);
  console.log(sortedRight);

  // merge two sorted arrays and sort them
  return merge(sortedLeft, sortedRight);
}

// Help from https://www.youtube.com/watch?v=wXZyuJqNk9U
function merge(leftArray, rightArray) {
  // console.log("merge two haves");

  // iteratively comparing elements and adding them until both input arrays are exhausted.
  let resultArray = []; // Build a new array with the sorted numbers instead of just modifying
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      // instead of while looping through the array, shift just keeps the first index as the
      // next number
      resultArray.push(leftArray.shift());
    } else {
      resultArray.push(rightArray.shift());
    }
  }
  return [...resultArray, ...leftArray, ...rightArray]; // Spread function... not sure

  // let i = 0; // leftArray
  // let j = 0; // rightArray
  // console.log(typeof leftArray, typeof rightArray);

  // while (i < a.length && j < b.length) {
  //   if (a[i] < b[j]) {
  //     resultArray.push(a[i]);
  //     i += 1;
  //   } else if (b[j] < a[i]) {
  //     resultArray.push(b[j]);
  //     j += 1;
  //   }
  // }
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
