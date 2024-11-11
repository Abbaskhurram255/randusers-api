const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error!");
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, (err) => {
  if (err) {
    if (err.code === "EADDRINUSE") {
      console.error(`port ${PORT} is already in use`);
      process.exit(1);
    }
    console.error("Failed to start server:", err);
    process.exit(1);
  }
  console.log(`listening on port ${PORT}`);
});
