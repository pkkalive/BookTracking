import React, { Component } from 'react';
import * as BooksAPI from './utils/BooksAPI';
import './App.css';

class App extends React.Component {
  state = {
    books : []
  }

  componentDidMount(){
    ContactsAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

  render() {
    console.log(this.state.books);
    return (
      <div className="app">
        Here I am ready to begin
      </div>
    )
  }
}

export default App
