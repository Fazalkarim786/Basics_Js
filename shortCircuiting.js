/* AND -> ToBoolean -> It returns second value if first is true(no need for checking second operand);
-> Otherwise -> If first value is false it returns first value without checking the second value */

console.log(10 && 30);
console.log(0 && 2);
console.log(4 && null);
console.log(null && 100 );
console.log(undefined && 0);


console.log(10 || 30);
console.log(0 || 20);  

// || ->(OR) Reverse of AND operator

console.log(1 && 0);   // 0
console.log(1 || 0);   // 1
console.log(0 || 1);   // 1
console.log("" && 78);  // ""
console.log("" || 78);  // 78
console.log(77 && 80);  // 80
console.log(77 || 80);  // 77
console.log(NaN && undefined);  //NAN
console.log(NaN || undefined);  //undefined

