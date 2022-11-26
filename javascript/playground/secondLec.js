//  what is the different between normal if if  condition and else if  condition? 
// ans: if (if) conditions check all statement first then execute all correct statment 
//  while else if just execute first correct statment other statment cannot be check  executed just execute one  

// ternary operator is used if there is just two condition 

// what is different switch condition and else if conditions 
// ans : where we can use swtich definatly there we can use else if 
//  switch is used for efficence mean  where we can use constant value  
// switch is used for range  


// // Conditions
// marks = 89;
// if (marks < 50 ) {
//     console.log("your are failed");
// }
// else {
//     console.log("you are pass");
// }


// // temp program 
// const temp = 46;
// if (temp > 45 ) {
//     console.log("it's to hot outside");
// }
// else if (temp > 35) {
// console.log("it is pretty nice outside");
// }

// // ternary operator
// (marks > 33 ? console.log("pass" ) : console.log("fail "));



// // switch 
// const number = 18 ;
// switch(number){
//     case 10 :
//         console.log("yes it is 10");
//         break;
//         case 20 : 
//         console.log("No it is not 10")
//         default:
//         console.log("this is default statment ");
// }



// // Template literals
// const firstName = "wasim ";
// const lastName = " haider"
// console.log(" Hello "  + firstName + " " + lastName);
// console.log(`Hellow ${firstName} ${lastName}`);
// const a = 10;
// console.log(`this is number of ${a}`);
// // also you can write like that 
// console.log(`this is number of ${a*10}`);


// // loops
// // for , while , do while 
// for loops is used for specified number of time  (pre conditions ) 
// while loops execute undefined number of time    (pre conditions ) 
// dowhile loops execute    1 or more and specifed and unspecified number of time executed (post conditions ) 


// for(let i=0;i<10;i++){
//     console.log(i);
// }


// //  Array 
// const list = [45,55,5,78,5,66,99,5];
// for(let i = 0; i < list.length; i++){
//     console.log(list[i]);
// }


// // while loops
// const list2 = [11,5,5,7,5,6,99,5];
// let j = 0;
// while(j < list2.length){
//     console.log(list2[j]);
//     j++;
// }


// // do while loops
// k = 0;
// do{
//     console.log(k);
//     j++; 
// }while(k > 10);






// Objects 
// object is actual variable where we can store multiple type of data in a single variable

// const data = {
//     marks : 45,
//     name : "wasimHaider",
//     gpa : 3.7,
//     ispass : true,
//     friends : ["salman" , " saqib ", "abdu-razaq", "qaisar"],
//     address : {
//         city : "hangu" ,
//         countery : "pakistan",
//         thesil :  "hangu",
//     }

// } 
// console.log(data);
// console.log(data.friends[2]);



// Array of objects

// const students = [
//     { 
//         marks : 45,
//         name : "wasimHaider",
//         gpa : 3.7,
//         ispass : true,
//         friends : ["salman" , " saqib ", "abdu-razaq", "qaisar"],
//         address : {
//             city : "hangu" ,
//             countery : "pakistan",
//             thesil :  "hangu",
//         }
//     },
//     {
//         marks : 85,
//         name : "saqib shadman wazeri",
//         gpa : 3.2,
//         ispass : true,
//         friends : ["zahid" , " saqib ", "saddaf", "salma"],
//         address : {
//             city : "mardan" ,
//             countery : "pakistan",
//             thesil :  "bahshali",
//         }
//     },
//     {
//         marks : 22,
//         name : "zia khan",
//         gpa : 1.7,
//         ispass :false,
//         friends : ["masroor" , " bilal  ", "maqsood", "asad"],
//         address : {
//             city : "bannu" ,
//             countery : "pakistan",
//             thesil :  "bannu",
//         }
//     }
// ]
// console.log(students[2].friends[1]);



// // product. json file creted from here 

// const data = {
//     "products": [
//       {
//         "name": "laptop",
//         "price": 1000, 
//         "isavaiable": true
//       },
//       {
//         "name": "tv",
//         "price": 10700,
//         "isavaiable": true
//       },
//       {
//         "name": "mobile",
//         "price": 1300,
//         "isavaiable": true
//       },
//       {
//         "name": "washing machine",
//         "price": 6600,
//         "isavaiable": true
//       },
//       {
//         "name": "fridge",
//         "price": 1400,
//         "isavaiable": true
//       }
//     ]
//   }