const fs = require("fs");
const bioData = {
    name : "wasim",
    age : 20,
    channel : "wmh shorts"
}

// console.log(bioData);
// console.log(bioData.channel);
// const json = JSON.stringify(bioData);  // obj change to json 
// console.log(json)

// const obj = JSON.parse(json); // json change to obj its come again to original form 
// console.log(obj);





// task
// 1 convert obj to json 
// 2 add this into the second file 
// 3 readfile 
// 4 again convert json to the obj original file
// 5 and then console.log (mean print it )


const jsondata = JSON.stringify(bioData);
// console.log(jsondata);

// fs.writeFile("json1.JSON", jsondata, (err) => {
// // console.log("done")
// } )

fs.readFile("json1.JSON" , "utf-8", (err, data) =>{
console.log(data);
const oriData = JSON.parse(data);
console.log(oriData)
})

