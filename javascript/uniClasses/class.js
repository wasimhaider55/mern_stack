// console.log("this is the first class of javascript");
// // also install node and nodemon 


// // Template literal 
// const a = 20 ;
// const b = 25;
// const c = a+b;
// // console.log("the sum of two number is = " + c);
// console.log(`the sum of ${a} and ${b}  is =  ${c}`);



// var , let , const 
// var is used for global decleration , redecleration 
// let is used for local decleration , redecleration 
// const  is used for local decleration it cannot be change ;


// arrow function 

// const squre = (n) =>{
//     return n * n ;
// }

// const res = squre(20);
// console.log(res);


// // simple function 
// function squre(num){
//     return num * num ; 
// }
// const results = squre(10);
// console.log("the square of number is equal to " + results);



// Destructure 
// array and object destructure 

const obj = {
    "id" : "1",
    "name" : "wasim",
    "rollno": "191037",
    "course" : ["cpp", "oop", "java"]
}

// const id = obj.id;
// const name = obj.name;
// const rollno = obj.rollno;
// console.log(id);


// destructuring 
// const {id,name,rollno} = obj;
// console.log(name);
// const {rollno,course} = obj;
// console.log(course);


// const printData = ({id, name,course}) => {
//     console.log(id);
//     console.log(name);
//     console.log(course);

// }

// printData(obj);



// // Array destructring 
// course = ["cpp", "oop", "java"];
// const [one,  ,two] = course ;
// console.log(two);


// callback and higher order function 

// function sum (a, b ,test) {
// aaaaaaa
// ssfdhddfa-flip
// hghjggfa-flip-horizontal
// test();
// }

// function test() {
    
// }


// ****************************//
//  Arry function 
const marks = [22,33,45,88,56,95,224,31,23,87,55,33,39];
 // lenght
//  console.log(marks.length);

//  for(let i = 0; i<marks.length; i++){
//     console.log(marks[i]);
//  }

// marks.forEach((numbers,index) => {
//     console.log(numbers,index);
// })

// const res = marks.filter((n) => {
//     return  n>50 
// })
// console.log(res)


// console.log("here we do operation in map ");
// const mapping = marks.map((n) => {
//     return n + 5;
// })
// console.log(mapping);



// const sum = marks.reduce((a,b) => {
//    return a+b },0);
//    console.log(sum);


// let count = 0;
// for(let i = 0; i<marks.length;i++){
// count += marks[i];
// }
// console.log(count);


// marks.push(10);
// console.log(marks);

//  const sorting = marks.sort((a,b) =>{
//     return a-b;

// });
// console.log(sorting);



// const a =  marks.indexOf(95);
// console.log(a);



// chaining 

const chainging =  marks
    .filter((n) => { return n<50})
    .map((n) => n + 5 )
    .sort((a,b) => a-b )
    .reduce((c,p) =>  {return c+p},0)
    console.log(chainging);


