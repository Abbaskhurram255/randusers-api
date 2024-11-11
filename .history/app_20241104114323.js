const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, (err) => {
  if (err) {
    if (err.code === "EADDRINUSE") {
      console.error(`port ${process.env.PORT || 3001} is already in use`);
      process.exit(1);
    } else {
      console.error("Failed to start server:", err);
      process.exit(1);
    }
  }
  console.log(`listening on port ${process.env.PORT || 3001}`);
});
