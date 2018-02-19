import React, { Component } from 'react';
import { Header } from './statelessComponents/StatelessComponents';
import BookShelfCategory from './BookShelfCategory';
import PropType from 'prop-types';

class BooksList extends Component {
	static propTypes = {
  	books:  PropType.array.isRequired,
  	onChangeBooksCategory: PropType.func.isRequired
  }

  render() {
  	const { books,onChangeBooksCategory } = this.props;
  	const bookShelfTitleSelector = [
	    {
	      title: 'Currently Reading',
	      books: books.filter((book) => book.shelf === 'currentlyReading')
	    },
	    {
	      title: 'Want to Read',
	      books: books.filter((book) => book.shelf === 'wantToRead')
	    },
	    {
	      title: 'Read',
	      books: books.filter((book) => book.shelf === 'read')
	    }
	  ]

    return (
      <div className='list-books'>
	      <Header heading={"My Reads"} />
	      <div className='list-books-content'>
			    {
			      bookShelfTitleSelector.map((book, index) => (
			       <BookShelfCategory
		            key={index}
		            title={book.title}
		            books={book.books}
		            onChangeBooksCategory={onChangeBooksCategory}
		          />
		        ))
			    }
      	</div>
      </div>
    );
  }
}

export default BooksList;