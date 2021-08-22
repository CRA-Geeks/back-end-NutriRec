const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;
const mongoose = require("mongoose");
const {
  createUser,
  getUser,
  updateUser,
} = require("./controllers/userdb.controller");

mongoose
  .connect(
    "mongodb+srv://mamoon:mmmmm89mm@cluster0.jw3jv.mongodb.net/nutri?retryWrites=true&w=majority",
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
app.get("/:email", getUser);
app.put("/:email", updateUser);

app.post("/createUser", createUser);

app.listen(port, () => {
  console.log(`Example app listening on port 8080!`);
});
