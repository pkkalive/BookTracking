import React, { Component } from 'react';
import PropType from 'prop-types';

class BookSelfChanger extends Component {

  static propTypes = {
    onChange: PropType.func.isRequired
  }

  render(){
    const {onChange} = this.props;
    return (
      <select value={'none'} onChange={(event) => onChange(event.target.value)}>
        <option value='moveTo' disabled>Move to...</option>
        <option value='currentlyReading'>Currently Reading</option>
        <option value='wantToRead'>Want to Read</option>
        <option value='read'>Read</option>
        <option value='none'>None</option>
      </select>
    )
  }
}

export default BookSelfChanger;