import "./styles.css";

import { fibs, fibsRec } from "./fibonacci";

fibs(8);
console.log(fibsRec(8));

import { mergeSort } from "./merge-sort";

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
