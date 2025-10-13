// const d=new Date()
// console.log(d);


//promises - a promise is an object that represents the eventual completion (or failure ) of an
// asynchronous operation and its resulting value

// syntacticly supioer of callback

// using call back

// function print(){
//     console.log("Yogyashri patil");
// }


// setTimeout(print , 3000)   // callback version


// using promises


// returns an object of the promise class
function setPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

function callback() {
    console.log("3 seconds have passed");
}

let p=setPromisified(5000)
console.log(p);
setPromisified(3000).then(callback)