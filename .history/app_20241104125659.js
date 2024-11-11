const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
app.use(express.json());

app.get("/:method", (req, res) => {
    res.send(`Hello ${req.params.method} ${req.path}/${req.method}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Internal Server Error!");
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, (err) => {
    if (err) {
      console.error("Failed to start server:", err);
      for (PORT; PORT < 3005 && err; ++PORT) {
        app.listen(PORT, () => {
          console.log(`listening on port ${PORT}`);
        });
      }
    }
    console.log(`listening on port ${PORT}`);
});
