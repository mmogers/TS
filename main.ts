//types
export{}
let message = 'Hello';
console.log(message);

let x = 10;
const y = 30;

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Marina';

//name = true // not boolean

let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence)

let n : null = null;
let u: undefined = undefined; //subtypes of all other types 

//let isNew: boolean = null; //not allowed anymore
//let myName: string = undefined; //not allowed anymore

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3] // the same as above

let person1: [string, number] = ['Chris', 22]; //fixed number of values of different types

enum Color{Red, Green, Blue}; //1,2,3
//enum Color{Red = 5, Green, Blue}; //5,6,7
let c: Color = Color.Green;//1
console.log(c);

let randomValue: any = 10; //good when moving from JS to typescript
randomValue = true;
randomValue = 'Marina';

let myVar: any = 10;
//console.log(myVar.name);
//myVar();
//myVar.toUpperCase();

let myVariable: unknown = 10;

function hasName(obj: any): obj is {name: string} {
    return !!obj &&
    typeof obj == 'object' &&
    "name" in obj
}

if(hasName(myVariable)){
    console.log(myVariable.name)
}

let a; //no inference if no initialization
a = 10;
a = true;

let b = 20; //inferred of type var b
//b = true; //type error

let multitype: number | boolean; //its ok for both types
multitype = 20;
multitype = false;

let anytype: any; // no restriction , no method support- intelligence support
anytype = 20;
anytype = true;

function add(num1: number, num2?: number): number{ //optional parameter should be after a required parameter
    if(num2){
        return num1 + num2;
    } else{
        return num1;
    }
}


console.log(add(5,10)); //static type checking 
//add(5,'10') //error
console.log(add(10));

function add2(num1: number, num2: number = 10 ): number{ //optional parameter should be after a required parameter
    if(num2){
        return num1 + num2;
    } else{
        return num1;
    }
}
    console.log(add2(5,10)); 

    console.log(add2(10)); //incorrect 20


interface Person{
    firstName: string;
    lastName?: string;
}
function fullName(person: Person){
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: "Marina",
    //lastName: "Me" //lastName is optional
};

fullName(p)

//classes
class Employee{
    public employeeName: string;

    constructor(name:string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Good Morning, ${this.employeeName} !`)
    }
}

let employee1 = new Employee('Marina')
console.log(employee1.employeeName)
employee1.greet()

//inheritance
class Manager extends Employee{
    constructor(managerName: string){
        super(managerName);
    }
    delegateWork(){
        console.log(`Manager delegating tasks`)

    }
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

//Access modifiers
//by default each class member is public
//protected can be accessed by child classes but not aoutside the class
















