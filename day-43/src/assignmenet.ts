interface Admin{
    name: string,
    permission: string
}
interface User{
    name: string,
    age: number
}
type userAdmin = User | Admin

function greet(user:userAdmin ){
    console.log(user.name)
}