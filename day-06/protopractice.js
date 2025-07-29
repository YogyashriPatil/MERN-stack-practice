class A {
    funinsideA()
    {
        console.log("in A");
    }
}

class B {
    funinsideB()
    {
        console.log("in B");
    }
    __proto__=A
}

const p1=new A()
console.log(p1.funinsideA());
