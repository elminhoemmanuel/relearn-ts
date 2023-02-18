// const person = "Mario";

// console.log(person);

// const inputs = document.querySelectorAll('input');
// console.log(inputs);

//union types
// let mixed: (string | number)[] = [];

// mixed.push(20);
// mixed.push("David");

let greet: (name:string, greeting:string) => void;

greet = (name:string , greeting:string):void =>{
    console.log(`${name} says ${greeting}`)
}
