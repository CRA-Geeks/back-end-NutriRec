const axios = require("axios");

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
    let nutriUrl = `https://api.edamam.com/api/nutrition-data?app_id=9e7a8f37&app_key=68e6fc442f17eb58e33369f2a6e7cdf2&nutrition-type=logging&ingr=${foodType}`;
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
