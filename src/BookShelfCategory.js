import React, { Component } from 'react';
import PropType from 'prop-types';
import BooksDetailsList from './BooksDetailsList';

class BookShelfCategory extends Component {
  static propTypes = {
    title: PropType.string.isRequired,
    books: PropType.array.isRequired,
    onChangeBooksCategory: PropType.func.isRequired
  }
  render(){
    const { title, books, onChangeBooksCategory } = this.props;
    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{title}</h2>
        <div className='bookshelf-books'>
            <BooksDetailsList books={books} onChangeBooksCategory={onChangeBooksCategory}/>
        </div>
      </div>
    )
  }
}

export default BookShelfCategory;