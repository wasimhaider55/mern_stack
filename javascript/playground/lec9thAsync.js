// const one = () => {
//     setTimeout(()=>{
//         console.log("one");
//     },5000)
// }

// const two = () => {
//     setTimeout(() => {
//         console.log("two");
//     },3000)
    
// }

// const three = () => {
//     console.log("three");
// }

// one();
// two();
// three();




// const one = (callback) => {
//     setTimeout(()=>{
//         console.log("one");
//         callback();
//     },5000)
// }

// const two = (callback) => {
//     setTimeout(() => {
//         console.log("two");
//         callback();
//     },3000)
    
// }

// const three = (callback) => {
//     console.log("three");
//     callback();
// }

// //  Call back Hell
// // we ware used before 2015 but we cannot use now it is just for understanding 
// one(
//     () => {
//         two( () => {
//             three(() => {
//                 console.log("Done");
//             })
//         })
//     }
// );







// ES6 
// promises

// const one = () => {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("one");
//             resolve();
//         },5000)

//     }) 
// }

// const two = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("two");
//             resolve();
//         },1000)
//     })    
// }

// const three = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("three");
//             resolve();
//         },3000)
//     })
// }
// // This is a small Hell 
// one().then(() => {
//     two().then(() => {
//         three().then(() => {
//             console.log("done");
//         })
//     })
// })






// // Async await
// const one = () => {
//         return new Promise((resolve, reject)=>{
//             setTimeout(() => {
//                 console.log("one");
//                 resolve();
//             },5000)
//         }) 
//     }
    
//     const two = () => {
//         return new Promise((resolve,reject) => {
//             setTimeout(() => {
//                 console.log("two");
//                 resolve();
//             },1000)
//         })    
//     }
    
//     const three = () => {
//         return new Promise((resolve,reject) => {
//             setTimeout(() => {
//                 console.log("three");
//                 resolve();
//             },3000)
//         })
//     }



//  async function run(){
//     await one()
//     await two()
//     await three();
// }
// run();




// real data taking example (it is just random example )
const getData = async() => {
   const data = await  fatch('http://.github.com/user/data');
   console.log(data.lenght);
}