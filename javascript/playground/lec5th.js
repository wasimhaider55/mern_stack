// what is the wrok of for each?
// for each loops is used for triversing (access for the purpose read write change enythings is called triversing )
// triversing mean start form firts element upto last elememt 
// for each is have no return type it's (void)
// for each is emuteable 


// // indexof 
// // if there is no value in the array the that index will return -1 
// const marks  = [51,45,88,99,7,55];
// const l = marks.indexOf(100);
// console.log(l);


// // concat ( mean append into end or add something to end (it will not wrok on between ))
// const marks  = [51,45,88,99,7,55];
// const remain = [95,98];
// const full = marks.concat(remain);
// console.log(full);



// // fill 
// const list = [];
// list.fill(10,0,10);


// // every  and some ( these are return boolen value )
// const list =  [ 100,100,100,100];
// list.every(100);
// list.some(100);



const friends = ["abdu-razaq", "qaisar-iqbal", "wasim-Haider", "zia Ullah"];


// const f1 = friends[0];
// const f2 = friends[1];
// const f3 = friends[2];
// const f4 = friends[3];
// console.log(f1);


// // Destructring array 
//  const [f1,,f2] = friends;
//  console.log(f2);


// Destructring object 
// obj destructring mean with out loops, triverse we can out the value form obj and keep it in a variable  this is the benifit of d.s

const studentList = {
    name1: "wasim",
    ispass: true,
    marks: 30,
    age: 23,
    friends: ["ali", "saddaf", "wasim"],
    address: {
        city: "hangu",
        village: "kahi",
    }
}

//  const {name1,address} = studentList;
//  console.log(name1,address);

// // TO DO 
// changeMarks(studentList);
// const changeMarks = (marks, address) => {
//     Obj.marks = 50;
// }

 

// // string manupolation 
//  const str1 = "hello";
//  const str2 = " world";
//  const str3 = " this is the new world";

//  const str = str1.concat(str2);
// const str = str1 + str2 ;
// const str = `${str1}  ${str2}`
//  console.log(str);
// const l = str3.indexOf("new");
// console.log(l);



// replace method (replace is immuteable )
// const l2 = str3.replace("new","old");
// console.log(l2);


// // sliceing method  (it can cut one puration from another puration )
// const str3 = "my country is pakistan ";
// // const country = str3.slice(14,22);
// const key = "pakistan";
// const country = str3.slice(str3.indexOf(key), str3.indexOf(key) + key.length)
// console.log(country);


// split method (delimetter)
// e.g => in c++ statment delimetter is finish of ( semicolon)

const string = "1,wasim,hangu,3.5,7th,icp";
// destructring arry here 
const [id ,name ,city, gpa, semester, institue] = 
string.split(" , ");
 

// trim (is used for remove the spaces form left and right )

const name1= "  wasim  ";
const triming = name1.trim();
console.log(triming);


// function of array 
// for each 
// Map
// filter 
// reduce
// indexof 
// sort
// slice 
// push/pop
// concat
// fill, some ,every

// string functions 
// trim , slice , concat , substring 
//  split , indexof ,  length, replace 
//   upperCase , lowerCase etc 


// array and object destructring 



