/*
A union type allows a variable to hold multiple types.

must check type before using specific methods:

type Admin = { role: "admin"; permissions: string[] };
type User1 = { role: "user"; name: string };

type Person1 = Admin | User1;

let p: Person1 = { role: "user", name: "Fathima" };
console.log(p);
//p = {role: "user", permissions: ["asdfa","asdf"]};//Object literal may only specify known properties, and 'permissions' does not exist in type 'User1'.


type Status2 = "success" | "error" | "loading";

let result: Status2;

result = "success"; // ✅
//result = "done"; ❌ Error Type '"done"' is not assignable to type 'Status2'
*/

let value: string | number;

value = "Fathima"; // ✅
console.log(value)
value = 25;        // ✅

console.log(value)


function printId(id: string | number) {
  console.log(id);
}

printId(101);
printId("A101");

function printLength(data: string | number) {
   //console.log(data.length)//Property 'length' does not exist on type 'string | number'.
  //Property 'length' does not exist on type 'number'.
  if (typeof data === "string") {
    console.log(data.length); // ✅
  } else {
    console.log(data.toFixed(2)); // ✅
  }
}

//Union with Objects
type Admin = { role: "admin"; permissions: string[] };
type User1 = { role: "user"; name: string };

type Person1 = Admin | User1;

const p: Person1 = { role: "user", name: "Fathima" };

//literal type

type Status2 = "success" | "error" | "loading";

let result: Status2;

result = "success"; // ✅
//result = "done"; 

