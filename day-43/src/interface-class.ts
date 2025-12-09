interface people{
    name:string,
    age: number,
    greet: () => string,
}

// let person: people = {
//     name:"yogyashri",
//     age: 21,
//     greet: () => {
//         return "hi"
//     }
// }

class Manager implements people{
    name: string;
    age: number;
    constructor(name: string, age:number){
        this.name = name
        this.age = age
    }
    greet(){
        return "hello " + this.name ;
    }
}

let user = new Manager("yogyashri", 21)
console.log(user.name)
console.log(user.greet)
// let greeting = person.greet();
// console.log(greeting)