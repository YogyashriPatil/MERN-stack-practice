interface User{
    name: string,
    age: number
}

type users = Record<string, User>
const people: users ={
    "a1":{
        name:"charu",
        age:12
    }
}

console.log(people)