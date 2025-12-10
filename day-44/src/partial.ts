interface User{
    id: string,
    name: string,
    age: number,
    email?:string,
    password?: string

}
const user: User = {
    id:"asdf",
    name:"asdfasdf",
    age: 20
}

console.log(user)