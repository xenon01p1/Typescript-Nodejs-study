type User = {
  id: number;
  name: string;
  email: string;
  age?: number;        // optional
  phoneNumber?: string; // optional
};

// This is now valid
const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
  // age and phoneNumber can be omitted
};

// =========== READ ONLY PROPERTIES ===============
// ================================================

// type User = {
//   readonly id: number;  // can't be changed after creation
//   name: string;
// };

// const user: User = {
//   id: 1,
//   name: "Alice"
// };

// user.name = "Bob";  // ✓ OK
// user.id = 2;        // ✗ Error! id is readonly

// =========== DYNAMIC PROPERTIES ===============
// ================================================

type UserSettings = {
  theme: string;
  [key: string]: string | number | boolean; // any other property
};

const settings: UserSettings = {
  theme: "dark",
  fontSize: 14,           // ✓ OK
  notifications: true,    // ✓ OK
  customColor: "#ff0000"  // ✓ OK
};


type Timestamps = {
  createdAt: string;
  updatedAt: string;
};

// =========== COMBINED PROPERTIES ===============
// ================================================

// type User = {
//   id: number;
//   name: string;
// } & Timestamps;  // Intersection - combines both types

// const user: User = {
//   id: 1,
//   name: "Alice",
//   createdAt: "2024-01-01",
//   updatedAt: "2024-01-15"
// };

// =========== Structural Typing (Duck Typing) ===============
// ================================================

type Point = {
  x: number;
  y: number;
};

function printPoint(point: Point) {
  console.log(`${point.x}, ${point.y}`);
}

// This works even though we didn't explicitly type it as Point
const myPoint = { x: 10, y: 20, z: 30 };
printPoint(myPoint); // ✓ OK - has x and y (extra z is ignored)

// This doesn't work
const incomplete = { x: 10 };
// printPoint(incomplete); // ✗ Error - missing y