const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
app.use(express.json());

app.all("/:number", (req, res) => {
  
    if (req.method === "GET") {
        res.send(
            `Hello ${req.params.number} ${req.path}/${req.method} request!`
        );
    } else if (req.method === "POST") {
        // TODO
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Internal Server Error!");
});

let PORT = parseInt(process.env.PORT) || 3002;
app.listen(PORT, (err) => {
    if (err) {
        throw new Error("Failed to start server:", err);
    }
    console.log(`listening on port ${PORT}`);
});
