let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  function GiveRating(props){
    return <h3>{stars[props.rating-1]}</h3>
  }
const rating = props.rating;
   return rating >=1 && rating <=5 ? <GiveRating rating={props.rating}/> : null; 
  return stars;
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
