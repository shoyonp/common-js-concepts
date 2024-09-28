// primitive types are pass value

let num1 = 5;
let num2 = 7;

function multiply(a, b){
    a = 25;
    const result = a * b;
    return result;
}
console.log(num1);

multiply(num1, num2)
console.log(num1);

// object and array pass by referance
let student1 = {name: 'Purna', partner: 'shoyon' };
let student2 = {name: 'bou', partner: 'syn'}

function makeMovie(couple1, couple2){
    couple1.name = 'Aparna';
    couple2.name = 'Punu';
}

console.log(student1,student2);
makeMovie(student1,student2)
console.log(student1,student2);