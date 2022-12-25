// const uuid = require ('uuid');
// const {faker} = require ('@faker-js/faker');
// var shuffle = require ('shuffle-array'),
// collection = ["wasim", "zia", "zeeshan","faizan"];
// shuffle(collection)



// console.log(uuid.v4());
// console.log(faker.internet.email());
// console.log(collection);




// const fs = require ('fs');
// // fs.readFile("data.txt", "utf8" , (err, data) => {
// // console.log(data); 
// // })


// // fs.writeFile("data.txt", " hellow world", (err, data) =>{   // this function override the data in data.txt file 
// //     if (err) return;
// //     console.log("file is saved ")
// // })



// const obj = {
//     "id": 1,
//     "name": "wasim",
//     "address": "hangu",
// }
 
// // we have writen the object through fs libray in data.txt floder 
// fs.writeFile("data.txt",JSON.stringify(obj), (err,data) => {
//     if (err) return;
//     console.log("file is saved");
// })

// fs.readFile("data.txt", "utf8" , (err,data) => {
//     if (err) return;
//     const o = JSON.parse(data);
//     console.log(o);
// })





















// from here start app cread operation app ( update delete create read inseration  )

const Notes = require("./Notes")

const n = new Notes();

// const data = n.readFile();
// console.log(data);

const rec = n.search(1);
console.log(rec);