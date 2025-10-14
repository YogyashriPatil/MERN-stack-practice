function setTimeoutPromisifieed(duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve,duration)
    });
}

setTimeoutPromisifieed(1000).then(function () {
    console.log("hii");
    return setTimeoutPromisifieed(3000)
}).then(function () {
    console.log("hello");
    return setTimeoutPromisifieed(5000)
}).then((function () {
    console.log("It done");
    // return setTimeoutPromisifieed(3000)
}))

console.log("Outside the callback hell");