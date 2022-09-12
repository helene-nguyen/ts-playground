"use strict";
function square(num) {
    return num * num;
}
square(3);
square('aze');
square(true);
function square2(num) {
    return num * num;
}
function greet(person) {
    return `Hi you, ${person}!`;
}
const doSomething = (person, age, isFunny) => { };
doSomething('Arturos', 42, 1234);
function whatever(num = 42) {
    return num;
}
function squareTypeReturn(num) {
    return num * num;
}
function greetTypeReturn(person) {
    return `Hi you, ${person}!`;
}
function squareTypeReturnVoid(num) {
    num * num;
}
function random(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
const add = (x, y) => {
    return x + y;
};
const colors = ['red', 'green', 'yellow', 'blue', 'magenta', 'yellow'];
colors.map(color => {
    return color.toUpperCase();
});
function printTwice(msg) {
    console.log(msg);
    console.log(msg);
}
function printTwiceReturn(msg) {
    console.log(msg);
    console.log(msg);
    return 'Hello';
}
function makeError(msg) {
    throw new Error(msg);
}
function gameLoop() {
    while (true) {
        console.log('Looping for ever');
    }
}
//# sourceMappingURL=functions.js.map