const square = function (x){
    return x*x;
}

//arrow function must be assigned to a variable

// const squareArrow = (x) => {
//     return x*x;
// }

const squareArrow = (x) => x*x;

console.log(squareArrow(9));

const fullName = 'Haziq Samuri';
const getFirstName = (fullName) => {
    return fullName.split(' ')[0]
}

const getFirstName2 = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Joe allen'));
console.log(getFirstName2(fullName));