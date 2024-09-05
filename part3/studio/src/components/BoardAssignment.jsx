import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [{label: "board1" , value: "board1"}, {label : "board2", value: "board2"}, {label : "board3", value: "board3"}];
   const [boardName, setName] = useState("no boards yet!");
   const handleChange = (event) => {
      setName(event.target.value);
   }
   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {
            boards.map(board => {
               return <option value={board.value}>{board.label}</option>
            })
         }
      </select>
      <p>Saved to {boardName}!</p>
      </div>
   );
}
