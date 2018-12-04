var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar',nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
//nameConst = 'Julie';
console.log('nameConst', nameConst);

function getPetName() {
    let petName = 'Hal';
    return petName;
}

getPetName();
//console.log(petName);

//var, let, const all function scoped (restricted to the function)

//const and let also block scoped - for loops and ifs

const fullName = 'Haziq Samuri';
let firstName;
if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
//let and const cannot access the firstName from above, use let 
//and reassign instead
console.log(firstName);