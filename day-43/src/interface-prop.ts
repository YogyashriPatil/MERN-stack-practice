interface user{
    name: string,
    age: number,
    address: undefined | {
        city: string,
        country: string,
        pincode: number
    }
}

let user2: user = {
    name:"yogi",
    age: 15,
    address: undefined
}
console.log(user2)