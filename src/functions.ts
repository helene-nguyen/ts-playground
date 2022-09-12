//~Types with function parameter

/**
 * 
 * @param num 
 * @returns Parameter 'num' implicitly has an 'any' type.
 */
function square(num) {
  return num * num;
}

// No error because TS considers type num as any type
square(3);
square('aze');
square(true);

//& Defines type parameter
function square2(num: number) {
  return num * num;
}

function greet(person: string) {
  return `Hi you, ${person}!`;
}

const doSomething = (person: string, age: number, isFunny: boolean) => {};

doSomething('Arturos', 42, 1234); //Argument of type 'number' is not assignable to parameter of type 'boolean'.

//Syntax if default value is defined
function whatever(num: number = 42) {
  return num;
}

//& Return type annotation
function squareTypeReturn(num: number): number {
  return num * num;
}

function greetTypeReturn(person: string): string {
  return `Hi you, ${person}!`;
}

// If the function returns nothing
function squareTypeReturnVoid(num: number): void {
  num * num;
}

function random(num: number): string | number {
  if (Math.random() < 0.5) {
    return num.toString();
  }

  return num;
}

const add = (x: number, y: number): number => {
  return x + y;
};

// It's nice to now the return value expected from the function

const colors = ['red', 'green', 'yellow', 'blue', 'magenta', 'yellow'];

// In the context, TS can determines the type of color
//TS can infer the type of the color parameter
colors.map(color => {
  return color.toUpperCase();
});

//& Void type

// This function is not supposed to return anything
function printTwice(msg: string) : void {
    console.log(msg);
    console.log(msg);
}

// This function is not supposed to return anything
function printTwiceReturn(msg: string) : void {
    console.log(msg);
    console.log(msg);
    return 'Hello'; // ERROR Type 'string' is not assignable to type 'void'
}

//& Never Type
// Values that NEVER occur = function that never finish executing
//! Do not confuse with void that returns undefined or null, never defines that a function doesn't finish executing

function makeError(msg: string) : never {
    throw new Error(msg);
}

function gameLoop() {
    while (true) {
        console.log('Looping for ever');
    }
}