import React, { Component } from 'react'
import PropType from 'prop-types';
import BookDetails from './BookDetails';
import sortBy from 'sort-by';

class BooksDetailsList extends Component {
  static propTypes = {
    books: PropType.array.isRequired,
    onChangeBooksCategory: PropType.func.isRequired
  }

  render() {

    const { books, onChangeBooksCategory } = this.props;
    books.sort(sortBy('title'));
    return (
      <ol className='books-grid'>
      {
        books.map((book, index) => {
          const { title, imageLinks, authors } = book
          return (
            <li key={index}>
              <BookDetails
                title={title}
                imageUrl={(imageLinks && imageLinks.thumbnail)}
                authors={authors}
                onChangeBooksCategory={(newCategory) => onChangeBooksCategory(book, newCategory)}
              />
            </li>
          )
        })
      }
      </ol>
    )
  }
}

export default BooksDetailsList;