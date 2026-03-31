enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;
console.log(move); // 0

enum Status {
  Success = 200,
  NotFound = 404,
  Error = 500
}

console.log(Status.Success); // 200

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

let userRole: Role = Role.Admin;
console.log(userRole); // ADMIN

/*
used to define a set of named constants, improving readability and avoiding hardcoded values.”

In modern TypeScript, sometimes people prefer:

type Role = "ADMIN" | "USER" | "GUEST";

Instead of enum (lighter & cleaner)
*/