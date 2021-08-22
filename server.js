const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;
app.use(cors());

const nutertionHandle = require('./contollers/Nutertion.controller')
app.get("/", (req, res) => res.send("Hello World!"));


//http://localhost:8000/nuteri?food=<....>
app.get('/nuteri', nutertionHandle);
app.listen(8000, () => console.log(`Example app listening on port 8080!`));
