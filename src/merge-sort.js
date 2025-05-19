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

export { mergeSort };
