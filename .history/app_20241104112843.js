const express = require("express");
const app = express();

app.use(app.json())

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, (err) => {
    
    console.log(`listening on port ${process.env.PORT || 3001}`);
});