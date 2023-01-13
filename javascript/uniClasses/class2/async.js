// using callback function 
// const one = (callback) => {
//     console.log("one");
//     callback();
// }
// const two = (callback) =>{
//     setTimeout(() => {    
//         console.log("two");
//         callback();
//     },1000)
// }
// const three = (callback) =>{
//     console.log("three");
//     callback();
// }




// // call back hell 
// one(()=>{
//     two(() =>{
//         three(() => {
//             console.log("done");
//         })
//     })
// })




// // one();
// // two();
// // three();



// using promises function
const one = () => {
    return new Promise((res, rej) => {
        console.log("one");
        res();
    })
}
const two = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("two");
            res()
        })
    }, 5000);
}
const three = () => {
    return new Promise((res, rej) => {
        console.log("three");
        res();
    })
}

// one().then(() => {
//     two().then(() => {
//         three().then(() => {
//             console.log("Done");
//         })
//     })
// })



//  await async
async function run() {
    await one();
    await two();
    await three();
}
run();
