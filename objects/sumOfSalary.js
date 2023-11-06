let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
//   Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
  
//   If salaries is empty, then the result must be 0.
sum_of_salaries = 0
for(let salary in salaries){
    sum_of_salaries += salaries[salary];
};
 
console.log(sum_of_salaries)