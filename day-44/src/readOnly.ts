type People = {
    readonly name:string,
    readonly age: number
}

const user: Readonly<People> = {
    name:"asdfasdf",
    age: 20
}

// user["name"]="adsknfh"

console.log(user)