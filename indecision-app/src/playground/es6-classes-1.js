

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        //return 'Hi. I am' + this.name;
        return `Hi. I am ${this.name}!`;
    }
    getDescription(){
        return `Hi. I am ${this.name} and I am ${this.age} years old!`;
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` My major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.homeLocation){
            greeting += ` I'm visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
    
}

const me = new Traveler('Haziq Samuri', 9, 'Melbourne');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
