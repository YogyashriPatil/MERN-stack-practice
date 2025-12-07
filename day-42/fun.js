"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    console.log("hello , " + name);
}
greet("Yogyashri");
function delayCall(fn) {
    setTimeout(fn, 10000);
}
delayCall(function () {
    console.log("Hi there");
});
delayCall(greet);
//# sourceMappingURL=fun.js.map