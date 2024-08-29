import  './styling.css';
import recipe from './recipe.json';

function AuthorInfo() {
  const authorName = recipe.map((props)=> {
    return <div key={props.author}>{props.author}</div>
  });
  const authorImage = recipe.map((props) => {
    return <img className="authorImage" src={props.authorImage} alt={props.author} />
  });
  const url = recipe.map((props) => {
    return <a href = {props.website}>Author's website</a>
  })
  return (
    <div>
       {authorImage}
       {authorName}
       {url}
    </div>
 );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 