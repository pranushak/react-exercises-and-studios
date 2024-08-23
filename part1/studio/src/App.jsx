import React from 'react';
import './App.css';
import RecipePhoto from './components/Photos';
import RecipeDescription from './components/Description';
import RecipeIngredients from './components/Ingredients';

function App() {

  return (
    <div className="App">
   <div>
      <RecipePhoto />
      <div>
         <RecipeDescription />
         <RecipeIngredients />
      </div>
   </div>
 </div>
  )
}

export default App



