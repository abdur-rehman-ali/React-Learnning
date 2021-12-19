//Class and objects. inheritance


//Ex1 class and object creation
class Person{
    constructor(nm)
    {
        this.person_name = nm; //property 
    }
    age=20; //Property outside constructor
    welcome() //method
    {
        console.log('Welcome ' + this.person_name + this.age );
    }
    welcome1 =() => console.log('Welcome ' + this.person_name + this.age );
    


}
let person1 =new Person('ali');
person1.welcome();
person1.welcome1();
console.log(person1.person_name);
console.log(person1.age);


//Ex2 inheritance
class Manager extends Person
{
    position = () => console.log('This is manager class extended from Person class');
}

let manager1 =new Manager('ali joiya');
manager1.welcome();
manager1.welcome1();
manager1.position();
console.log(manager1.person_name);
console.log(manager1.age);