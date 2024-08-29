import recipeData from "./recipe.json";

function RecipeName() {
   const recipeName = recipeData.map((props) =>{
    return <li key={props.name}>{props.name}</li>
   })
  return <div><h1>{recipeName}</h1></div>;

}

export default RecipeName;

//import return the name of the recipe as a level 1 header