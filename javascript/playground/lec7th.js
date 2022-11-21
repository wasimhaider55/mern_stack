// // number methoods
// const list = 12;
// const list2 = 33.44;
// // console.log(typeof(list));
// // console.log(typeof(list2));



// converting to string
// const str = list.toString(); // explicit type conversion  
// const str = list+" ";     // implicit  type conversion  



// const num = 33.444444444444;
// const t = num.toFixed(2);
// const t1 =Math.ceil(num);
// const t2 =Math.floor(num);
// console.log(`${t} ${t1}  ${t2}`);




// const fs = require("fs");
// fs.writeFileSync("text.txt" , "hellow");


// const num = Math.random();
// console.log(Math.ceil(num*100));


// // random number using for loops 
// for (let i = 0; i<10; i++){
//     const num = Math.random();
// console.log(Math.ceil(num*100));
// }



// // it for ludo game creating upto six number 
// for (let i = 0; i<=6; i++){
//     const num = Math.random();
// console.log(Math.ceil(num*6));
// }



// // Date Methods

// const d = new Date();  // new key words instentation in heap 
// console.log(d.getDate());
// console.log(d.getFullYear());
// console.log(d.getYear());
// console.log(d.getDay());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());
// console.log(d.getTime());
// console.log(d.toDateString(""));



// // max and min array finding 
// const arr = [778,2,55,66,999,447,5589,12];
// const max = Math.max(...arr);
// const min = Math.min(...arr);
// console.log(max);
// console.log(min);


// // sets ( sets we have array at just allow unique value )
// const s = new Set ([1,2,3,4,5,6,7,8,9,10]);
// s.add(15);
// console.log(s);

// iterable words means  the things  we can apply loops on them 



// // // how to returns key of value 
// const obj = {
//     sNo : 1,
//     name : "wasim",
//     age : 23,
//     marks : 67
// }
// // const keys = Object.keys(obj);
// // console.log(keys);

// for ( let i in obj){
//     console.log(i);
// }



// // for in loops is used for when we itreation on the object  of keys 
//  const obj = {
//         sNo : 1,
//         name : "wasim",
//         age : 23,
//         marks : 67
// }

// for(let i=0; i<obj.length; i++){
//     console.log(obj[i].name);
// }

// for (let o in obj){
//     console.log(obj[o].name);
// }


// // for of used for if we have no iterable it will make for us iterable 
// const name = "pakistan ";
// for(let i of name){
//     console.log(i);
// }
