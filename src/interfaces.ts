interface User {
  name: string;
  age: number;
}

const persons: User = {
  name: "Fathima",
  age: 25
};

/*
Interface is used to define the structure of an object in TypeScript, ensuring type safety and consistency
Properties:
1. Optional Property
2. Readonly Property



*/

interface Person { 
name: string; 
readonly age: number;
}
 
 
interface Employee extends Person { 
employeeId: number; 
isActive?: boolean;
}
 
let employee1: Employee = { 
name: "John", 
age: 30, 
employeeId: 1234, 

}
 
console.log(employee1); // Output: { name: "John", age: 30, employeeId: 1234 }

employee1.employeeId = 23;
console.log(employee1.employeeId)
//employee1.age = 23 //Cannot assign to 'age' because it is a read-only property.



// interface with function
interface Greet { 
 
(name: string): string; 
}
 
 
 
let sayHello: Greet = function(name: string) { 
  return `Heloo, ${name}`;
}
console.log(sayHello("Sagar")); // Output: "Hello, Saga 
