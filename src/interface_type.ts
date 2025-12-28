// =========== BASIC USAGE ==============
// =======================================

// Interface
interface User {
  id: number;
  name: string;
}

// Type
// type User = {
//   id: number;
//   name: string;
// };

// Both work exactly the same way
// const user: User = { id: 1, name: "Alice" };

// =========== INTERFACE ==============
// =======================================

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
  department: string;
}

// =======================================
// =======================================

// Union types
type Status = "pending" | "approved" | "rejected";

// Primitives
type UserId = number;
type Email = string;

// Tuples
type Coordinate = [number, number];

// Mapped types
type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};

// NONE of these work with interface!

// =======================================

// Use interface for object shapes that might be extended
interface BaseUser {
  id: number;
  name: string;
}

interface AdminUser extends BaseUser {
  permissions: string[];
  role: "admin";
}

interface RegularUser extends BaseUser {
  role: "user";
}

// Use type for unions, primitives, utilities
type UserRole = "admin" | "user" | "moderator";
type ApiStatus = "loading" | "success" | "error";

// Combining both
interface User {
  id: UserId;        // type alias
  role: UserRole;    // union type
  status: ApiStatus; // union type
  name: string;
}