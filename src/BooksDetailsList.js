import React, { Component } from 'react'
import PropType from 'prop-types';
import BookDetails from './BookDetails';
import sortBy from 'sort-by';

class BooksDetailsList extends Component {
  state = {
    defaultImage : '',
  }
  
  static propTypes = {
    books: PropType.array.isRequired,
    onChangeBooksCategory: PropType.func.isRequired
  }

  render() {

    const { books, onChangeBooksCategory } = this.props;
    const { defaultImage } = this.state;
    books.sort(sortBy('title'));
    return (
      <ol className='books-grid'>
      {
        books.map((book, index) => {
          const { title, imageLinks, authors, shelf } = book
          return (
            <li key={index}>
              <BookDetails
                title={title}
                imageUrl={(imageLinks && imageLinks.thumbnail) || defaultImage }
                authors={authors}
                status={shelf}
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
