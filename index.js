const myLibrary = [];
let booksContainer = document.querySelector("#container");

class Book {
  constructor(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }

  // Class Level Method
  static addBookToLibrary(title, author, pages, isRead){
    const newBook =  new Book(title, author, pages, isRead);
    myLibrary.push(newBook);

  }

  static removeFromLibrary(index){
    myLibrary.splice(index, 1);
  }
  
  static displayBook(book){
    const bookCard = createBookCard();

    bookCard.children[0].textContent = book.title;
    bookCard.children[1].textContent = `By: ${book.author}`;
    bookCard.children[2].textContent = `${book.pages} pages`;
    bookCard.children[3].textContent = book.isRead;
    bookCard.children[4].textContent = "Remove"
    
    booksContainer.appendChild(bookCard);
  
  }

}


function createBookCard(){
  let bookCard = document.createElement("div");
  bookCard.classList.add("bookCard");
  let title = document.createElement("h1");
  title.classList.add("title");
  let author = document.createElement("h3");
  author.classList.add("author")
  let pages = document.createElement("p");
  pages.classList.add("pages");
  let isRead= document.createElement("p");
  isRead.classList.add("readStatus");

  bookCard.setAttribute("data-index", myLibrary.length - 1); //Setting custom data attribute for tracking
  
  let removeBtn = document.createElement("button");
  removeBtn.classList.add("removeBtn");


  removeBtn.addEventListener("click", ()=>{
    const index = bookCard.getAttribute("data-index");
    Book.removeFromLibrary(index);
    booksContainer.removeChild(bookCard); 
    
  })

  const book = [title, author, pages, isRead, removeBtn]

  book.forEach(element => bookCard.appendChild(element));

  return bookCard;
}

const addBtn  = document.querySelector("button");

const dialog = document.querySelector("dialog");

let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let isRead = document.querySelector("#readStatus");

addBtn.addEventListener("click", () =>{
  dialog.showModal();
  title.value = "";
  author.value = "";
  pages.value = "";
});

const closeBtn = document.querySelector(".close-btn");
const addToLib = document.querySelector(".add-to-lib");

closeBtn.addEventListener("click", ()=>{
  dialog.close();
});
 

addToLib.addEventListener("click", ()=>{

  if(title.value && author.value && pages.value){
    Book.addBookToLibrary(title.value, author.value, pages.value, isRead.value);
    Book.displayBook(myLibrary[myLibrary.length - 1]);

  }
  
})
