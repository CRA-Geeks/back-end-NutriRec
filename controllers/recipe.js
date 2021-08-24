const axios = require("axios");
require("dotenv").config();
const key = process.env.RECIPE_KEY;
const app_id = process.env.RECIPE_APP_ID;

function recipeData(req, res) {
  let typeRecipe = req.query.q;

  let recipeURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${typeRecipe}&app_id=${app_id}&app_key=${key}`;

  axios
    .get(recipeURL)
    .then((resp) => {
      res.send(resp.data);
    })
    .catch((err) => console.error("Some thing happen in your API..." + err));
}

module.exports = recipeData;