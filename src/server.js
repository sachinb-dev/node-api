const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!, WE ARE LIVE ON VERCEL!!");
});

app.get("/test", (req, res) => {
  res.send("Hello World! TEST ENDPOINT");
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});