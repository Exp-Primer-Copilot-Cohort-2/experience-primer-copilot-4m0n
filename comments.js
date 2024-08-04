// Create web server
// Create a web server
const express = require("express");
const app = express();
const port = 3000;

// Serve static files
app.use(express.static("public"));

// Add a route to serve comments.json
app.get("/comments", (req, res) => {
  res.sendFile(__dirname + "/comments.json");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});