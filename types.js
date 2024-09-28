// strongly types language 
// int a = 5;
// string b = 'ok bye';
// bool c = True;
// object student = { name: 'Purna', id: 19};
// int[] numbers = [13, 15, 38];
// string[] frindes = ['Purna', 'Bou'];

//Javascript is a dynamic type language
const a = 5;
const b = 'Purna';
const d = true;

// non-primitive
const ages = [14, 37, 39];
const students = {id: 19, class: 13}
// console.log(typeof a, typeof b,typeof d, typeof ages, typeof students);

let x = 5;
let y = x;
console.log(x , y);
y = 7;
console.log(x, y);


let p = {job: 'web deveoper'}
let q = p;
// q = {job: 'Backend end'}
q.job = "front end developer"
console.log(p, q);