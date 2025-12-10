interface User{
    id: string,
    name: string,
    age: number,
    email:string,
    password: string

}
type UpdatedProps = Pick<User, 'name' | 'age' |'email'>
function updateUser(updatedProps: UpdatedProps){
    console.log(updatedProps)
}

// console.log(first)
updateUser({
    name: "khushi",
    age: 12,
    email: "yogyashri"
})