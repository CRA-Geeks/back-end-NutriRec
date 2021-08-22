const axios = require("axios");
require("dotenv").config();


function recipeData(req,res){
   let typeRecipe=req.query.q;
   let key=process.env.REACT_APP_RECIPE_KEY;
let recipeURL=`https://api.edamam.com/api/recipes/v2?type=public&q=${typeRecipe}&app_id=68be126a&app_key=${key}
`

axios.get(recipeURL)
  .then(resp=>{
      
      res.send(resp.data);
  })
  .catch(err=>console.error('Some thing happen in your API...'+err))


}




module.exports=recipeData;