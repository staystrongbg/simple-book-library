//adding objects to array dinamically

const addBookBtn = document.querySelector('.add-book-btn');
const addFormBtn = document.querySelector('.add-form-btn');
const content = document.querySelector('.content');
const formContainer = document.querySelector('.form-container');
const bookTitle = document.querySelector('.book-title');
const pages = document.querySelector('.pages-number');
const author = document.querySelector('.book-author');

let myLibrary = [];

addFormBtn.addEventListener(
  'click',
  (showForm = () => {
    formContainer.classList.toggle('scale-1');
  })
);

addBookBtn.addEventListener('click', addBook);

function addBook() {
  let myBook = {
    title: bookTitle.value,
    author: author.value,
    pages: pages.value,
    read: true,
  };
  if (bookTitle.value !== '' && author.value !== '' && pages.value !== '') {
    myLibrary.push(myBook);
    console.log(myLibrary, myBook);
    localStorage.setItem('myLibary', JSON.stringify(myBook));
    displayBook();

    document.forms[0].reset();
  } else {
    alert('enter something');
  }
}

function displayBook() {
  let myBooks = myLibrary.map((book) => {
    return /*html */ `<div class='book'>
      <h2>${book.title}</h2>
      <h3>${book.author}</h3>
      <h3>${book.pages}</h3>
      <div class='book-btns'>
      <div>
        <input type="checkbox" id="read" name="read" value="read-status">
        <label for="read">read status</label>
      </div>
        <button class='btn remove-btn'>remove</button>
    </div>
    </div>`;
  });
  content.innerHTML = myBooks.join('');
  let removeBookBtn = document.querySelectorAll('.remove-btn');
  removeBookBtn.forEach((btn, id) => {
    btn.addEventListener('click', removeBook);
  });

  function removeBook() {
    console.log('removed');
    const books = document.querySelectorAll('.book');
    console.log(books[0]);
    books[0].remove();
    myLibrary = [];
  }
}

function readStatus() {
  const readCheck = document.querySelector('read');
  console.log(readCheck);
  if (readCheck.checked == true) {
    console.log('book read');
  }
}

//ovo resenje kao radi ali mulja nesto sa indexima
// document.querySelectorAll('.remove');
// removeBooks.forEach((item, id) => {
//   item.addEventListener('click', removeThisBook);
//   function removeThisBook() {
//     delete myLibrary[id];
//     content.childNodes[id].remove();
//   }
// });

//ovo ne izbacuje errore ali ne ne radi nikako
// const removeBooks = document.querySelectorAll('.remove');

// const removeBook = (id) => {
//   let newBooks = myBooks.filter((book) => book.id !== id);
//   myBooks = newBooks;
// };

// removeBooks.forEach((book) => {
//   addEventListener('click', removeBook);
// });

// function resetInput() {
//   bookTitle.value = '';
//   author.value = '';
//   pages.value = '';
// }
