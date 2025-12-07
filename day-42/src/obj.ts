function greet(user : {
    name: string,
    age: number
}){
    console.log("hello " + user.name)
}

let user = {
    name:"yogyashri",
    age:21
}

greet(user)