import app from "./app.js";

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


// npx tsc --watch
// npx nodemon dist/server.js