import recipeData from './recipe.json';
import RecipeName from './RecipeName';

function RecipeImage() {
const recipeImage = recipeData.map((props) =>{
  return <img className="recipeImage" src ={props.recipeImage} alt ={props.name} />
})
   return <div>
    {recipeImage}
   </div>;
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 