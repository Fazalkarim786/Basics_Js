//loops in Js

for(let i=1; i<=5; i++){
    console.log("Apna college");
}
// while and do while

// for of loop -> used for arrays and strings(without update and ini)
let str = "Fazal Karim" 
let size = 0;
for(let i of str){
    console.log(i);
    size++;
}
console.log("size of", size)

// for in loop -> used for objects(we get keys of objects)
const student = {
    name : "fazal",
    age : 21,
    cgpa : 8.0,
    college : "JNCT"
};
 for(let key in student){
    console.log("value of key = ",key, "value =", student[key]);
 }