import recipe from './recipe.json'

function IngredientList() {
  let ingredients = [];
  recipe.map((props) =>{
   const list = props.ingredients.map((ingredient, i) => {
    return <li key={i}>{ingredient}</li>
   });
   ingredients.push(list)
  })
   return <div>
    <h3>{ingredients}</h3>
   </div>;
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 