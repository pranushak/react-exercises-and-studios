import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.vahrehvah.com/hyderabadi-chicken-biryani-recipe";
   let authorPhoto = "https://upload.wikimedia.org/wikipedia/commons/8/89/Sanjay_Thumma%2C_The_Vah_Chef.jpg";
   let authorName = "Sanjay Thumma";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Chicken", "Rice", "Fried Onions", "Biryani Masala", "ginger & garlic"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Chicken Dum Biryani</h1>
            <p>This is the most popular dish in Hyderabad,India.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://vismaifood.com/storage/app/uploads/public/e12/7b7/127/thumb__700_0_0_0_auto.jpg" alt="Chicken Dum biryani" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
