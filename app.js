console.log('hello world')



const body = document.querySelector('body'); 
const collectionItems = document.querySelectorAll('.card');

const htmlCode = `<html>
  <body>
  <h1>Welcome to our store!</h1>
  <button>This is a button</button>
  <p> thank you for shopping with us!</p>
    <p>We have a fine selection of medals.</p>
<<<<<<< HEAD
  <p>Please choose a section below.</p>

  <div>
      <a href="bronze.html">Bronze medals</a>
    </div>
=======
>>>>>>> parent of 6c60b30 (Add bronze metals)
  </body>
</html>`

//Print out items in the card collections
for (ele of collectionItems){

	console.log(ele)
}
///This is the last line of my code
