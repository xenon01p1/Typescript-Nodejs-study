export type Email = string;
export type UserId = number;
export type IsActive = boolean;
export type User = {
    id: number;
    email: string;
    isActive: boolean;
};
export type CreateUserRequest = {
    email: string;
    password: string;
    name?: string;
};
export type UserProfile = {
    bio: string | null;
    avatarUrl: string | null;
};
export type OptionalToken = {
    token: string | undefined;
};
export type RoleList = string[];
export type IdList = number[];
export type UserList = User[];
export type UserStatus = "ACTIVE" | "INACTIVE" | "BANNED";
export type UserWithStatus = {
    id: number;
    email: string;
    status: UserStatus;
};
export type UserWithProfile = {
    id: number;
    email: string;
    profile: {
        name: string;
        age?: number;
    };
};
export type ApiResponse<T> = {
    data: T;
    message?: string;
};
export type UserResponse = ApiResponse<User>;
export type UserListResponse = ApiResponse<User[]>;
export type DbUser = {
    id: number;
    deletedAt: Date | null;
    lastLoginAt?: Date;
};
//# sourceMappingURL=test.d.ts.map