// for loops using array 
// const marks1 = [2,35,2,4,6,3,6,3,654,3,32];
// for (let i = 0 ; i <= marks.length ; i++){
//     console.log(marks[i]);
// }


// const marks2 = [2,35,2,4,6,3,6,3,654,3,32];
// marks2.forEach(function (n) {
//     console.log(n);
// }
//  )


// // Map method 
// // map creating new array and map return arry 
// const marks3 = [2,35,2,4,6,3,6,3,654,3,32];
//  const square = marks3.map((a) =>  a < 30 ?  a*a: a  )
//     console.log(square);


// // filter  method
// const marks3 = [2,35,222,4,61,3,62,3,54,3,32];
// const fail = marks3.filter((n) => n > 30 );
// console.log(fail);



 
// reduce  method
// reduce convert complete array into single value 
// To Do 
// const marks3 = [2,35,222,4,61,3,62,3,54,3,32];
// for ( let i = 0 ; i<marks3.length; i++){
//     if (marks3[i] > 30 ){
//         below.push(marks3[i]);
//     }
//     console.log(marks3[i]);
// }

// // program sum  array element in single value 
// const marks3 = [2,35,222,4,61,3,62,3,54,3,32];
// const sum = marks3.reduce(((a, b) => a + b), 0);
// console.log(sum)



// map vs filter different 
// map can change the value while  filter cannot change the value  it's jsut filter the value 


// Find 

// Fill 


// sort ( is also emuiteable )
// it can sort a single value but there is problem in double value see down program 
// const list2 = [ 1,2,3,4,5,7,8,3,5,9];
// const sort = list2.sort();
// console.log(sort);

// // put the function for multiple digits number 
// const list2 = [ 1,2,32,435,556,75,8,3,5,9];
// const sort = list2.sort((x , y ) => x-y);
// console.log(sort);



const marks  = [51,45,88,99,7,55,];
// it is chaning 
const sum = marks 
     .sort((a , b ) => a - b )
     .filter((n) => n > 50 )
     .map((n) => n + 10)
     .reduce((a , b ) => a+b ,0);
     console.log(sum);