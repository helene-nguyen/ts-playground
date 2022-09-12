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
};
