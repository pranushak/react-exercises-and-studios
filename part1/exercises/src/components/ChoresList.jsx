import React from 'react';
import classes from './ChoresList.module.css';

 function ChoresList () {
   const chores =["Empty Dishwasher","Mop the Floor", "Laundry"];
    return(
        <div>
         <h3 className = {classes.choresHeading}>Today's Chores</h3>
         <ul>
            <li className ={classes.choresText}>{chores[0]}</li>
            <li className = {classes.choresText}>{chores[1]}</li>
            <li className={classes.choresText}>{chores[2]}</li>
         </ul>
      </div>
   );
}

export default ChoresList;