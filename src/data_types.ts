/* ========================================
   PRIMITIVES
======================================== */

export type Email = string;
export type UserId = number;
export type IsActive = boolean;

// function sendEmail(to: Email, subject: string) {
//   // implementation
// }

// const userEmail: Email = "john@example.com";
// sendEmail(userEmail, "Welcome!");


/* ========================================
   OBJECT (basic shape)
======================================== */

export type User = {
  id: number;
  email: string;
  isActive: boolean;
};


/* ========================================
   OPTIONAL PROPERTY (?)
   - property may be missing
======================================== */

export type CreateUserRequest = {
  email: string;
  password: string;
  name?: string; // may be undefined
};


/* ========================================
   NULLABLE VALUE
   - value exists but is intentionally empty
======================================== */

export type UserProfile = {
  bio: string | null; // explicitly empty
  avatarUrl: string | null;
};


/* ========================================
   UNDEFINED EXPLICITLY
   - rarely needed, but useful to know
======================================== */

export type OptionalToken = {
  token: string | undefined; // present but maybe undefined
};


/* ========================================
   ARRAY OF PRIMITIVES
======================================== */

export type RoleList = string[];
export type IdList = number[];


/* ========================================
   ARRAY OF OBJECTS
======================================== */

export type UserList = User[];


/* ========================================
   UNION TYPE
   - restrict allowed values
======================================== */

export type UserStatus = "ACTIVE" | "INACTIVE" | "BANNED";


/* ========================================
   OBJECT WITH UNION
======================================== */

export type UserWithStatus = {
  id: number;
  email: string;
  status: UserStatus;
};


/* ========================================
   NESTED OBJECT
======================================== */

export type UserWithProfile = {
  id: number;
  email: string;
  profile: {
    name: string;
    age?: number; // optional inside object
  };
};


/* ========================================
   ARRAY + OBJECT + UNION (real backend shape)
======================================== */

export type ApiResponse<T> = {
  data: T;
  message?: string;
};

export type UserResponse = ApiResponse<User>;
export type UserListResponse = ApiResponse<User[]>;


/* ========================================
   NULL VS UNDEFINED (side by side)
======================================== */

export type DbUser = {
  id: number;
  deletedAt: Date | null;      // null = soft deleted
  lastLoginAt?: Date;          // undefined = never logged in
};
