// array like oject
function sum(a, b, c){
    const args = [...arguments]
    // console.log(args);
    const result = a + b + c;
    return result;
}

const total = sum(45, 6, 29, 39, 27, 49, 37)
// console.log(total);
console.log(sum.length);