function setTimeoutPromisifieed(duration ) {
    return new Promise(function (resolve) {
        setTimeout(resolve,duration)
    })
}

function callback() {
    console.log("Passs");
}

setTimeoutPromisifieed(5000).then(callback)