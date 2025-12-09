let firstname : string = "harkirat"
let age: number = 19

interface UserType {
    firstname: string,
    lastname: string,
    age: number
}

function isLegal(user : UserType){
    if(user.age > 18)
        return true
    else
        return false
}

let user : UserType= {
    firstname:"yogyashri",
    lastname:"patil",
    age:21
}
console.log(user)
console.log(isLegal(user))