// default Argument  or default parameter 

// const fun = (name) => {
//     console.log(`Hello ${name}`)
// } 

// // functional overloading is not supported in js 
// // we cannot create 2 function at the same name 
// fun();
// fun(2);
// fun("wasim");

// regular Expression ( is used for pettren search  )
// regular expression can be use for searching  and verification 
// regular expression are same in every language just learn one time use in every language 

// const str = "wasim";
// // const t = str.search(/wasim/);
// // const t = str.search(/Wasim/i) // i is used for case insensitive 
// // const t = str.search(/Wasim/ig) // ig is used for global  
// // used pettren and falg  
// const t = str.search(/Was(i|ee)m/i) 
// console.log(t);


// escape sequence (can change the original meaning like \t and \n )
//  back slish ( / ) is important for eacape sequence 
// system.out.println(" hellow t  world ") 
// system.out.println(" hellow n  world ")
//  () group with parentheses like => const t = str.search(/Was(i|ee)m/i) 

// // cnic regular expression 
// const cnic = 14101-7821912-5;
// const t = cnic.search(/^[0-9]{5}\-[0-9]{7}\-[0-9]{1}/g);


// // regular expression of number 
// const num = +923360574327;
// const i = num.search(/^\+92[0-9]{10}/g);




// // (...) elipses  or sprid operator 
// // use for array concatinaion and object concatination
// const list1 = [1,5,9,66,55,77,85,];
// const list2 = [3,52,94,...list1,727,5,];
// // const list3 = list1.concat(list2)
// console.log(list2);

 

// // elipses use for object 
// const obj1 = {
//     name : "wasim",
//     age : 23,
//     marks : 98
// }


// const obj2 = {
//     ...obj1,
//     gpa : 3.7,
//     semester : 6
// }



// const sum = (a , b) =>{
//     console.log(a+b);
// }
// const values = [10,20];
// sum(values[0],values[1]); // also write like that but it is difficult 
// sum(...values); // here use sprid operator 





// const count = (a,b,  ...c) => {
//      console.log(a+b);
//      const s = c.reduce((a , b) => a+b , 0);
//      console.log(s);
// }
// count(40,50,47,2,3,5,8,9);





// // example topic no name 
// // how to make objects from normal variable 

// // noraml variable 
// const fname = "wasim";
// const lname = "haider";
// const age = 23;
// const gender = "male"
// const city = "hangu ";
// const village = "kahi";
// const houseno = 324;

// // created here objects from normal variable 
// const data = {
//     fname,
//     lname,
//     age,
//     gender,
//     city,
//     village,
//     houseno,
//     address : {
//         city,
//         village,
//         houseno,
//      }
// }
// console.log(data);
