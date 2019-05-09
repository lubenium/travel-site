function Person(Name, Color){
    this.name = Name;
    this.color = Color;
    this.greet = function(){
       console.log(`My name is ${this.name}, and my favorite color is ${this.color}.`); 
    };
    
};
module.exports = Person;