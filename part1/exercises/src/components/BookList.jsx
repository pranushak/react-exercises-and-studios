export default function BookList() {
   let pageTitle = "My Books List";
   let book1 = "What Happens Next";
   let book2 = "The Power of Your Dreams";
   let book3 = "Reverse The Curse";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src="https://images.penguinrandomhouse.com/cover/9780307393883" alt={book1} />
         <img src="https://m.media-amazon.com/images/I/81Eu--x0-JL._SX522_.jpg" alt={book2} />
         <img src="https://m.media-amazon.com/images/I/41mRqR2PYFL.jpg" alt= {book3} />
      </div>      
   );
}