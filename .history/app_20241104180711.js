const express = require("express");
const dotenv = require("dotenv");

//configuring express
const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all("/:number", (req, res) => {
    if (Number(req.params.number) % 1 !== 0) {
        return res.status(400).send("Invalid number!");
    }
    let path = req.path;
    let method = req.method;
    if (method === "GET") {
        res.send(`${req.params.number} from request!`);
    } else if (method === "POST") {
        res.send(req.body);
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Internal Server Error!");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(404).send("404 Error!");
});

let PORT = parseInt(process.env.PORT) || 3002;
app.listen(PORT, (err) => {
    if (err) { 
        throw new Error("Failed to start server, failed with error:", err);
    }
    console.log(`listening on port ${PORT}`);
});
