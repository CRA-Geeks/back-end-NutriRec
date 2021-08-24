const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const port = process.env.PORT;
const user = process.env.USERA;
const password = process.env.PASSWORD;
console.log(port, user, password);

const recipeData = require("./controllers/recipe");
const nutertionHandle = require("./contollers/Nutertion.controller");
const mongoose = require("mongoose");
const {
  createUser,
  getUser,
  updateUser,
  updateFav,
} = require("./controllers/userdb.controller");

mongoose
  .connect(
    `mongodb+srv://${user}:${password}@cluster0.jw3jv.mongodb.net/nutri?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/user/:email", getUser);
app.put("/user/:email", updateUser);
app.post("/user/createUser", createUser);
// http://localhost:8080/addFiv/${this.props.auth0.user.email}`
app.put("/addFiv/:email", updateFav);
app.get("/nuteri", nutertionHandle);
app.get("/recipe", recipeData);

app.listen(port, () => console.log(`Example app listening on port 8080!`));
