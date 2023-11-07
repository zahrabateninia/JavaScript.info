"use strict";

let arr = ["I", "go", "home"];

// delete arr[1]; // remove "go"

// alert( arr[1] ); // undefined

// alert( arr.length ); // 3

// arr.splice(1,1); // from index one, remove one element.


arr.splice(0, 2, "You", "love");
console.log(arr);

let arr2 = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr2.splice(2, 0, "complex", "language");

console.log( arr2); // "I", "study", "complex", "language", "JavaScript"