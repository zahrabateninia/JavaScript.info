"use strict";

let arr = ["I", "go", "home"];

delete arr[1]; // remove "go"

alert( arr[1] ); // undefined

alert( arr.length ); // 3

arr.splice(1,1); // from index one, remove one element.

