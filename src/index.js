import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// const firstBook ={
//   bookAuthor : 'Amelia Hepworth',
//   bookTitle : 'I Love You to the Moon and Back',
//   bookImg : 'https://m.media-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
// }
// const secondBook ={
//   bookAuthor : 'Stephen King',
//   bookTitle : 'Fairy Tale',
//   bookImg : 'https://m.media-amazon.com/images/I/81PMOtoT7zL.jpg'
// }

const books =[
  {
    id: 1,
    bookAuthor : 'Amelia Hepworth',
    bookTitle : 'I Love You to the Moon and Back',
    bookImg : 'https://m.media-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
  },
  {  
    id: 2,
    bookAuthor : 'Stephen King',
    bookTitle : 'Fairy Tale',
    bookImg : 'https://m.media-amazon.com/images/I/81PMOtoT7zL.jpg'
  },
  {  
    id: 3,
    bookAuthor : 'Stephen King',
    bookTitle : 'The Eyes of the Dragon',
    bookImg : 'https://m.media-amazon.com/images/I/51ZcphefSxL.jpg'
  }, 
]

function BookList () {
  return (
    <section className = 'booklist'>
      {/* <Book 
          bookTitle = {firstBook.bookTitle}
          bookImage  = {firstBook.bookImg}
          bookAuthor = {firstBook.bookAuthor}     
      >
        {/* The contents here is not accessed naturally
        You must pass children into the props to catch the lines */}
        {/* <p> 
          book description goes here 
        </p> */}
      {/* </Book>
       <Book 
          bookTitle = {secondBook.bookTitle}
          bookImage  = {secondBook.bookImg}
          bookAuthor = {secondtBook.bookAuthor}      */}
      {/* this method creates a book object and passes it as props */}
      {/* this is not the only way, so we will create another below */}
      {/* {books.map((book) => {
        <Book key={book.id} book ={book}></Book>
      })} */}
      {/*the spread operator - instead of properties as an object
      You are spreading them ONTO the existing props*/}
        {books.map((book) => {
          <Book key={book.id} {...book}></Book>
        })}

    </section>
  )
}
//const Book = ({bookImg, bookTitle, bookAuthor}) => {
//passing {children} below
//children is a special keyword to look for object children
//without it they are ignored // see <p> above with description
//last example, we have to use props.book to match the values mapped above
//the props become empty because we are returning the value and not defining
const Book = (props) =>{
  // const {bookImg, bookTitle, bookAuthor, children} = props
  const {bookImg, bookTitle, bookAuthor} = props
  // const {bookImg, bookTitle, bookAuthor} = props.book
//examples here include creating an event when you click a title
  const clickHandler = () => {
    alert("alert, you clicked")
  }

  const difficultHandler = (author) => {
    console.log(author)
  }

  return (
    <article className = 'book'>
      <img src = {bookImg} alt ='' />
      <h1 onClick ={()=> console.log('you clicked title')}>{bookTitle}</h1>
      <h4>{bookAuthor.toUpperCase()}</h4>
      <button type ="button" onClick={clickHandler}>Button Example</button>
      <button type ="button" onClick={difficultHandler(bookAuthor)}>Return Author Example</button>
      <button type ="button" onClick={() =>difficultHandler(bookAuthor)}>Return Author Example</button>

      {/* this example button runs every render
      it is not denoting a method on click, so it is just running each time */}
      {/* <button type ="button" onClick={difficultHandler(bookAuthor)}>Return Author Example</button> */}

      {/* {children} */}
      {/* {props.children} */}
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))