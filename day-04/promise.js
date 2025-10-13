 //promises - a promise is an object that represents the eventual completion (or failure ) of an
// asynchronous operation and its resulting value

// need to tell when eventually completion

// function random(){
//     console.log("jsdhfa");
// }

// // eventually completion              
// // let p=new Promise(random);  // supposed to return that are something eventually
// // console.log(p);

// let d=new Date();
// console.log(d);


// promisified function of file 

const fs = require("fs");

function readTheFile(sendTheFinalValueHere) {
    fs.readFile("a.txt" , "utf-8" , function (err,data) {
        sendTheFinalValueHere(data)
    })
}

function readFile(filename) {
    return new Promise(readTheFile)
}

const p=readFile();

function callback(content) {
    console.log(content);
}

 
p.then(callback)