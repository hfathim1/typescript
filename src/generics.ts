/*
Generics allow you to write reusable and flexible code by using a placeholder type.
Instead of fixing the type, you make it dynamic.

//Real time example:

function getValue<T>(key: string, data: Record<string, T>): T {
  return data[key];
}

*/

function identity<T>(value: T): T {
  return value;
}
let result1 = identity<number>(123);
let result2 = identity<string>("Hello");

console.log(result1);
console.log(result2);

//Generic Array

function getFirst<T>(arr: T[]): T {
  return arr[0];
}

let result3 = getFirst<string>(["a", "b", "c"]);
console.log(result3)

//Multiple Generic
function combine<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

let combineGeneric = combine<string, number>("Age", 25);
console.log(combineGeneric)


//Generic Interface

interface ApiResponse<T> {
  data: T;
  status: number;
}

const response: ApiResponse<string> = {
  data: "Success",
  status: 200
};

console.log(response)


//Generic with constraints 

function printLengths<T extends { length: number }>(value: T) {
  console.log(value.length);
}

printLengths("Hellow");
printLengths([1,3,3,34]);
//printLengths(32); //Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.



