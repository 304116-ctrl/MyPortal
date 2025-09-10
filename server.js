const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

// Serve all static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Root route serves the main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`MyPortal server running on port ${port}`);
});
