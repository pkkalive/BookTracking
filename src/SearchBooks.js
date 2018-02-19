import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BooksDetailsList from './BooksDetailsList';
import * as BooksAPI from './utils/BooksAPI';
import PropType from 'prop-types';
import sortBy from 'sort-by';

class SearchBooks extends Component {

  state = {
    query: '',
    searchBooks: []
  }


  static propTypes = {
    onChangeBooksCategory: PropType.func.isRequired
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })

    if(query.trim() !== '') {
      BooksAPI.search(query, 15).then(books => this.setState({
        searchBooks: books
      }))
    } else {
      this.setState({
        searchBooks: []
      })
    }
  }

  createSearchBooksList(searchBooks, books) {
    const searchBooksListWithId = this.generateSearchBooksListWithId(books)

    return searchBooks.map((book) => {
      if (book.id in searchBooksListWithId) {
        const shelf = searchBooksListWithId[book.id].shelf
        return { ...book, shelf }
      }
      return book
    })
  }

  generateSearchBooksListWithId(books) {
    const defaultId = {}
    const BooksListWithId = (booksList, book) => {
      booksList[book.id] = book
      return booksList
    }
    return books.reduce(BooksListWithId, defaultId)
  }

  render() {

    const { books, onChangeBooksCategory } = this.props;
    const { query, searchBooks } = this.state;
    const searchBooksList = this.createSearchBooksList(searchBooks, books);
    searchBooksList.sort(sortBy('title'));
    return (

      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
            className="close-search"
          >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type='text'
              placeholder='Search by title or author'
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BooksDetailsList books={searchBooksList} onChangeBooksCategory={onChangeBooksCategory}/>
        </div>
      </div>
    )
  }
}

export default SearchBooks;