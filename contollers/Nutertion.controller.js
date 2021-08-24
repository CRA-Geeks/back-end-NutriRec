const axios = require("axios");
require('dotenv').config();
const app_id = process.env.APP_ID;
const app_key = process.env.APP_KEY;


let foodInfo = {
  calories: "",
  weight: "",
  suger: "",
  vegetarian: "",
  peanut: "",
  pork: "",
  alcohol: "",
  //  fat: ''
};

let nutertionHandle = (req, res) => {
  try {
    let foodType = req.query.food;
    let nutriUrl = `https://api.edamam.com/api/nutrition-data?app_id=${app_id}&app_key=${app_key}&nutrition-type=logging&ingr=${foodType}`;
    axios.get(nutriUrl).then((item) => {
      foodInfo.calories = item.data.calories;
      (foodInfo.weight = `${item.data.totalWeight} gm`),
      item.data.healthLabels.map((item) => {
        switch (item) {
          case "LOW_SUGAR":
            foodInfo.suger = "Low Suger";
            break;
          case "VEGETARIAN":
            foodInfo.vegetarian = "Vegetarian";
            break;
          case "PEANUT_FREE":
            foodInfo.peanut = "Peanut free ";
            break;
          case "PORK_FREE":
            foodInfo.pork = "Pork free";
            break;
          case "ALCOHOL_FREE":
            foodInfo.alcohol = "Alcohol free";
            break;
          default:
        }
      });

      res.send(foodInfo);
    });
  } catch {
    res.send("Error: the information that you searched for it are not found");
  }
};
module.exports = nutertionHandle;