export type Email = string;
export type UserId = number;
export type IsActive = boolean;

const userId: UserId = 123;
const email: Email = "user@test.com";

function deleteUser(id: UserId) { /* ... */ }
function sendEmail(email: Email) { /* ... */ }

deleteUser(userId); // ✓ correct
sendEmail(email);   // ✓ correct

// This works in JS but TS helps catch the mistake:
// deleteUser(email);  // Type error! Email is not assignable to UserId