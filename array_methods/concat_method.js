let arr = [1, 2];

let arrayLike = {
  0: "something",
  length: 1
};

console.log( arr.concat(arrayLike) ); // 1,2,[object Object]

let anotherArrayLike = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2
  };
  
  console.log( arr.concat(anotherArrayLike) ); // 1,2,something,else