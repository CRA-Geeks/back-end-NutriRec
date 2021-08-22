const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;
const recipeData =require('./controllers/recipe')
app.use(express.json())
app.use(cors());

const nutertionHandle = require('./contollers/Nutertion.controller')
app.get("/", (req, res) => res.send("Hello World!"));



app.get('/nuteri', nutertionHandle);



app.get('/recipe',recipeData);







app.listen(port, () => console.log(`Example app listening on port 8080!`));

