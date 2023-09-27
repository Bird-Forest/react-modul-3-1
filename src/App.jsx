import { Component } from 'react';
import css from './App.module.css';
import { Heading } from 'components/Heading/Heading';
import { Book } from 'components/book/Book';
import booksJson from './books.json';
import BookForm from 'components/BookForm/BookForm';
// import { findByTitle } from '@testing-library/react';

const books = booksJson.books;

export class App extends Component {
  state = {
    appBooks: books,
    counterValue: 0,
    deliteCounter: 0,
    // contacts: []
  };
  handleIncrement = () => {
    // this.setState({ counterValue: this.state.counterValue + 1 });
    this.setState(prevState => {
      return {
        counterValue: prevState.counterValue + 1,
      };
    });
  };
  handleDelete = bookTitle => {
    this.setState(prevState => {
      return {
        appBooks: prevState.appBooks.filter(book => book.title !== bookTitle),
        deliteCounter: prevState.deliteCounter + 1,
        // contacts: [...prevState.contacts, newContact]
      };
    });
  };
  handleAddBook = bookData => {
    console.log(bookData);
    const hasBookDuplicate = this.state.appBooks.some(
      book => book.title === bookData.title
    );
    //  if (this.state.appBooks.some(book => book.title === bookData.title))
    if (hasBookDuplicate) {
      alert(`Oops, book with title ${bookData.title} already exists`);
      return;
    }

    this.setState(prevState => {
      return {
        appBooks: [bookData, ...prevState.appBooks],
      };
    });
  };
  render() {
    return (
      <div>
        <Heading className={css.headingApp1}>React homework template</Heading>
        <Heading className={css.headingApp1}>
          State value: {this.state.counterValue}
        </Heading>
        <Heading className={css.headingApp1}>
          Delete books: {this.state.deliteCounter}
        </Heading>

        <BookForm handleAddBook={this.handleAddBook} />

        <ul className={css.booksList}>
          {this.state.appBooks.map((book, index) => {
            return (
              <Book
                key={`${book.title}_${book.author}`}
                title={book.title}
                author={book.author}
                year={book.year}
                genre={book.genre}
                favourite={book.favourite}
                cover={book.cover}
                handleIncrement={this.handleIncrement}
                handleDelete={this.handleDelete}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
