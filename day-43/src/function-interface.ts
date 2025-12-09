function greet(name: string): string{
    return "Hello " +name;
}

function isEven(num: number): boolean{
    if(num%2 ==0 )
        return true
    else 
        return false
}
console.log(isEven(4))
console.log(greet("yogi"))