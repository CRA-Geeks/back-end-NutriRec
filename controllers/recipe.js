const axios = require("axios");
require("dotenv").config();

function recipeData(req, res) {
  let typeRecipe = req.query.q;
  let key = "e78697484bbf4d176dad922de1637988";
  let app_id = "d7161d0c";
  let recipeURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${typeRecipe}&app_id=${app_id}&app_key=${key}`;

  axios
    .get(recipeURL)
    .then((resp) => {
      res.send(resp.data);
    })
    .catch((err) => console.error("Some thing happen in your API..." + err));
}

module.exports = recipeData;
