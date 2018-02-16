import React, { Component } from 'react';

class BooksList extends Component {

  render() {
  	console.log (this.props.books);
    return (
      <div >
        Will display list of books here with categories
      </div>
    )
  }
}

export default BooksList;