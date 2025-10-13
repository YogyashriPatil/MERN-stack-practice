function callback() {
    console.log("Hii ");
}

setTimeout(function() {
    console.log("hjiiiiii");
    setTimeout(function () {
        console.log("helllllll");
        setTimeout(function () {
            console.log("hell0o world");
        },5000)
    },3000)
},1000)

console.log("Outside the callback hell");