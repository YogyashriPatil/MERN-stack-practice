interface User{
    name: string,
    age: number
}

const users = new Map<string, User>()
users.set("a1",{name:"charu",age:12})


console.log(users.get("a1"))