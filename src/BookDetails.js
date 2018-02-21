import React, { Component } from 'react';
import PropType from 'prop-types';
import BookSelfChanger from './BookSelfChanger';

class BookDetails extends Component {
  static propTypes = {
    title: PropType.string.isRequired,
    imageUrl: PropType.string.isRequired,
    onChangeBooksCategory: PropType.func.isRequired
  }

  render(){
    const { title, imageUrl, authors, status, onChangeBooksCategory } = this.props;
    return (
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url(${imageUrl})` }}></div>
          <div className='book-shelf-changer'>
            <BookSelfChanger status={status} onChange={onChangeBooksCategory}/>
          </div>
        </div>
        <div className='book-title'>{title}</div>
        <div className='book-authors'>
          {
            authors && authors.join(', ')
          }
        </div>
      </div>
    )
  }
}

export default BookDetails;
