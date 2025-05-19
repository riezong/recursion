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

export { fibs, fibsRec };
