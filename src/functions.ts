// Basic function
function addNumbers(a: number, b: number): number {
  return a + b;
}

// Arrow function
const multiply = (a: number, b: number): number => {
  return a * b;
};

// If function returns nothing, use void
function logMessage(message: string): void {
  console.log(message);
  // no return statement
}

type User = {
    id: number,
    name: string,
    email: string
}

function getUser(id: number): User {
  // Returns immediately
  return { id, name: "Alice", email: "alice@example.com" };
}

const user = getUser(1); // user is type User

async function fetchUser(id: number): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  const data = await response.json();
  return data; // returns User, but wrapped in Promise
}

// When you call it, you need to await
const userAsync = await fetchUser(1); // user is type User (unwrapped)


// This function returns a Promise that will resolve to a number

async function someAsyncOperation() {}

async function calculateScore(): Promise<number> {
  await someAsyncOperation();
  return 100;
}

// This returns Promise<User[]>
async function getAllUsers(): Promise<User[]> {
  const response = await fetch('/api/users');
  return response.json();
}

// This returns Promise<void> - async but no return value
async function saveData(data: string): Promise<void> {
  await fetch('/api/save', { 
    method: 'POST', 
    body: data 
  });
  // no return
}

// =========== REAL EXAMPLE ==============
// =======================================

type UserId = number;
type UserResponse = {
    message: string,
    data: {
        name: string,
        age: number
    }
};

type Game = {
    title: string,
    genre: "ACTION" | "FPS" | "MYSTERY",
}
type GameListResponse = {
    message: string,
    totalData: number,
    data: Game[]
};

// Combining what we learned with ApiResponse
async function fetchUserById(id: UserId): Promise<UserResponse> {
  const response = await fetch(`/api/users/${id}`);
  const json = await response.json();
  return json; // { data: User, message?: string }
}

async function fetchAllGames(): Promise<GameListResponse> {
  const response = await fetch('/api/games');
  return response.json(); // { data: Game[], message?: string }
}

// Using them
const userResponse = await fetchUserById(123);
console.log(userResponse.data.name); // TypeScript knows data is a User

const gamesResponse = await fetchAllGames();
gamesResponse.data.forEach(game => {
  console.log(game.title); // TypeScript knows data is Game[]
});