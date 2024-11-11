const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
app.use(express.json());

app.get("/:method", (req, res) => {
  res.send(`Hello ${req.params.method} ${req.path}/${req.method} request!`);
  if (req.method === "GET") {
    res.send(`Hello ${req.params.method} ${req.path}/${req.method} request!`);
  } else if (req.method === "POST") {
    res.send(`Hello ${req.params.method} ${req.path}/${req.method} request!`);
  }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Internal Server Error!");
});

let PORT = parseInt(process.env.PORT) || 3002;
try {
  app.listen(PORT, (err) => {
    if (err) {
      throw new Error("Failed to start server:", err);
    }
    console.log(`listening on port ${PORT}`);
  });
} catch {
  console.error("Failed to start server");
  process.exit(1);
}