class Person {
    constructor(Name, Color) {
        this.name = Name;
        this.color = Color;
    }
    
    greet () {
       console.log(`Hi, there. My name is ${this.name}, and my favorite color is ${this.color}.`); 
    }
    
};
console.log('hello');
//module.exports = Person;
export default Person;