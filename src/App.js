import React, { Component } from 'react';
import * as BooksAPI from './utils/BooksAPI';
import { Link, Route } from 'react-router-dom';
import BooksList from './BooksList';
import SearchBooks from './SearchBooks';


class App extends Component {
  state = {
    books : []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

  updateBookCategory(book, shelf) {
    if (book.shelf !== shelf) {
      BooksAPI.update(book, shelf)
        .then((response) => {
          book.shelf = shelf
          this.setState({
          books: this.state.books.filter(b => b.id !== book.id).concat([ book ])
        })
      })
    }
  }

  handleChangeBooksCategory(book, newCategory) {
    this.updateBookCategory(book, newCategory)
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <BooksList
              books={this.state.books}
              onChangeBooksCategory={this.handleChangeBooksCategory.bind(this)}
            />
          )}
          />
          <div className="open-search">
            <Link
              to='/search'
            >Add a book</Link>
          </div>

          <Route exact path='/search' render={() => (
          <SearchBooks
              books={this.state.books}
              onChangeBooksCategory={this.handleChangeBooksCategory.bind(this)}
            />
          )}
          />
      </div>
    )
  }
}

export default App;
