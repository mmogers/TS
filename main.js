"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var message = 'Hello';
console.log(message);
var x = 10;
var y = 30;
var isBeginner = true;
var total = 0;
var name = 'Marina';
//name = true // not boolean
var sentence = "My name is ".concat(name, "\nI am a beginner in Typescript");
console.log(sentence);
var n = null;
var u = undefined; //subtypes of all other types 
//let isNew: boolean = null; //not allowed anymore
//let myName: string = undefined; //not allowed anymore
var list1 = [1, 2, 3];
var list2 = [1, 2, 3]; // the same as above
var person1 = ['Chris', 22]; //fixed number of values of different types
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; //1,2,3
//enum Color{Red = 5, Green, Blue}; //5,6,7
var c = Color.Green; //1
console.log(c);
var randomValue = 10; //good when moving from JS to typescript
randomValue = true;
randomValue = 'Marina';
var myVar = 10;
//console.log(myVar.name);
//myVar();
//myVar.toUpperCase();
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj == 'object' &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
var a; //no inference if no initialization
a = 10;
a = true;
var b = 20; //inferred of type var b
//b = true; //type error
var multitype; //its ok for both types
multitype = 20;
multitype = false;
var anytype; // no restriction , no method support- intelligence support
anytype = 20;
anytype = true;
function add(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
console.log(add(5, 10)); //static type checking 
//add(5,'10') //error
console.log(add(10));
function add2(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
console.log(add2(5, 10));
console.log(add2(10)); //incorrect 20
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: "Marina",
    //lastName: "Me" //lastName is optional
};
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning, ".concat(this.employeeName, " !"));
    };
    return Employee;
}());
var employee1 = new Employee('Marina');
console.log(employee1.employeeName);
employee1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
