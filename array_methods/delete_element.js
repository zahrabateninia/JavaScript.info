"use strict";

let arr = ["I", "go", "home"];

delete arr[1]; // remove "go"

alert( arr[1] ); // undefined

// now arr = ["I",  , "home"];
alert( arr.length ); // 3

arr.slice(1,1) // from index one, remove one element.
// now arr is ["I", "home"]

