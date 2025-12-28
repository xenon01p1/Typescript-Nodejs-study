
// ========= Define data types ===========
// ====================

export type ApiResponse<T> = {
  data: T;
  message?: string;
};

export type Settings = {
  theme: string;
  volume: number;
  notifications: boolean;
  language: string;
};

export type GameConfig = {
  difficulty: string;
  soundEnabled: boolean;
  controlScheme: string;
};

export type UserPreferences = {
  darkMode: boolean;
  fontSize: number;
  autoSave: boolean;
};

// Then use them in ApiResponse
export type SettingsResponse = ApiResponse<Settings>;
export type GameConfigResponse = ApiResponse<GameConfig>;
export type UserPreferencesResponse = ApiResponse<UserPreferences>;


// ========= Multiple Generics ===========
// ====================


// export type ApiResponse<TData, TError = string> = {
//   data: TData;
//   error?: TError;
//   message?: string;
//   timestamp: number;
// };

// // Now you can specify both data type AND error type
// export type SettingsResponse = ApiResponse<Settings, { code: number; details: string }>;
// export type GameResponse = ApiResponse<Game>; // TError defaults to string


// ========= Nested Generics ===========
// ====================

// export type PaginatedResponse<T> = {
//   data: T[];
//   page: number;
//   totalPages: number;
//   totalItems: number;
// };

// export type PaginatedSettingsResponse = ApiResponse<PaginatedResponse<Settings>>;

// This expands to:
// {
//   data: {
//     data: Settings[];
//     page: number;
//     totalPages: number;
//     totalItems: number;
//   };
//   message?: string;
// }