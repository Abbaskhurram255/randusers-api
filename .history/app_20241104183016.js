const express = require("express");
const dotenv = require("dotenv");

//configuring express
const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all("/:number", (req, res) => {
    let path = req.path,
        method = req.method,
        params = req.params;
    if (
        Number(params.number) % 1 ||
        Number(params.number) < 1 ||
        !isFinite(Number(params.number))
    ) {
        return res.status(400).send("Invalid number!");
    }
    console.log(`Received a ${method} request on ${path}, acting accordingly!`);
  if (method === "GET") {
      
        res.send(`${req.params.number} from request!`);
    } else if (method === "POST") {
        res.send(req.body);
    } else if (method === "PUT") {
        res.send(req.body);
    } else if (method === "DELETE") {
        res.send(`Deleted ${req.params.number} from request!`);
    }
});

app.use((err, req, res) => {
    console.error(err.stack);
    res.status(500).send("Internal Server Error!");
});

let PORT = parseInt(process.env.PORT) || 3002;
app.listen(PORT, (err) => {
    if (err) {
        throw new Error("Failed to start server, failed with error:", err);
    }
    console.log(`listening on port ${PORT}`);
});
