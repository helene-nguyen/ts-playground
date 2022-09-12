//~Types with variables

let word = 'Hello World';
// word = 42; // ERROR


const words = ["One", "Two", "Three", "Four", "Five"];
let foundWord; // no type defined

for (let word of words) { 
    if (word === "Three") {
        foundWord = word;
    }
};

// foundWord(); // ERROR foundWord(); is not a function
foundWord = "Thing";
foundWord = true;
foundWord = 42;

console.log(foundWord); //42 no error

//! When we don't annotate a variable's type AND we don't initialize it with a value, it has a type of "any"
