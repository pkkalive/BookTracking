import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BooksDetailsList from './BooksDetailsList';
import * as BooksAPI from './utils/BooksAPI';
import { Throttle } from 'react-throttle';
import PropType from 'prop-types';
import sortBy from 'sort-by';

class SearchBooks extends Component {

  state = {
    searchBooks: [],
    error: false,
    loading: false
  }

  static propTypes = {
    onChangeBooksCategory: PropType.func.isRequired
  }

  updateQuery = (query) => {
    let maxResults=15
    if (query.trim() === '' && query.length === 0) {
      this.setState({ searchBooks: [], loading:false })
      return
    }
    if (query.length !== 0){
      BooksAPI.search(query, maxResults)
        .then((searchResults) => {
          if (searchResults.error) {
             this.setState({ searchBooks: [], error: true, loading:false })
             return
          } else {
              this.setState({ searchBooks: searchResults, loading:true, error: "" })
          }
        }).catch((error) => {
          console.log(error)
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
    const { searchBooks, error, loading } = this.state;
    const searchBooksList = this.createSearchBooksList(searchBooks, books);
    searchBooksList.sort(sortBy('title'));
    return (

      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <Throttle time="500" handler="onChange">
              <input type='text' placeholder='Search by title or author' onChange={(event) => this.updateQuery(event.target.value)}/>
            </Throttle>
          </div>
        </div>
        <div className="search-books-results">
        {
          error && (<div> No Results Found </div>)
        }
        {
           loading && (<BooksDetailsList books={searchBooksList} onChangeBooksCategory={onChangeBooksCategory}/>)
        }
        </div>
      </div>
    )
  }
}

export default SearchBooks;
