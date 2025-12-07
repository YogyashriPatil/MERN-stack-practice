function greet(name : string){
    console.log("hello , "+name)
}

greet("Yogyashri")

function delayCall(fn : (name : string) => void){
    setTimeout(fn, 10000)
}

delayCall(function(){
    console.log("Hi there")
})


delayCall(greet)