//Lect 15

//arguments object - no longer bound with arrow functions

// const add = function(a,b){
//     console.log(arguments);
//     return a+b
// };

const add = (a,b) => {
   // console.log(arguments); -> no more access in arrow funcs
    return a+b
};
console.log(add(55,1));
//this keyword - no longer bound

const user = {
    name: 'haziq',
    cities: ['Melbourne', 'Singapore'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + 'has lived in ' + city);
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city)
        // })
    }
};

console.log(user.printPlacesLived());

//Challenge Area

const multiplier = {
    //numbers - array of numbers
    //multiplyBy - single number
    //multiply - return array of multiplied
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());