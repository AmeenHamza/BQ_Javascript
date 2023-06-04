//  Hoisting (Moves var , function keyword onto the top or make first executable)

// --- setTimeout() funciton

const myFunc = ()=> {
    console.log("This is the work of setTimeout()");
}

setTimeout(myFunc,3000);

// ------- CLosures -------

const myFunc1 = ()=> {
    console.log("This is the closure");

    const anotherFunction = ()=> {
            console.log("Another function");
    }

    anotherFunction();  // This is the closure one function is call within the function 
}

myFunc1();

// IIFE --- Functions

(()=> {
    console.log("When page runs it executes automatically");
})();

// ES-6 String Formatting

const myOBj = {
    nameMy : "AMeen Hamza",
    id : 57
}

const {nameMy,id} = myOBj;  // This is destructuring

console.log("My name is "+myOBj.nameMy+" and my id is "+myOBj.id);
console.log(`My name is ${nameMy} 
and my id is ${id}`);

// Ternary operators or one line if-else

const age = 19;

age>19 ? console.log("Not allowed") : console.log("Hello");

// Rest operator || Spread operator

const sum = (a,b,c)=> a + b + c;

console.log(sum(1,2,3));