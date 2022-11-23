// import Products form './Products';  ES6 use like this (bible and webpig to convert ES6)
const Products = require("./Products"); // ES5


// create new instense of products 
const p1 = new Products();
const p2 = new Products();

// // it's for object p1
// p1.name = "product1";
// p1.price = 100;
// p1.quantity = 10;
// const bill = p1.bill();
// console.log(bill)


// it's for object p2
p2.name = "digital watch";
p2.price = 200;
p2.quantity = 6;
const bill = p2.bill();
console.log(bill);

