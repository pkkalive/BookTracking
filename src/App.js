import React, { Component } from 'react';
import * as BooksAPI from './utils/BooksAPI';
import { Route } from 'react-router-dom';
import BooksList from './BooksList';
import './App.css';

class App extends Component {
  state = {
    books : []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path = "/" render = {() => (
            <BooksList
              books = {this.state.books}
            />
          )}
          />
      </div>
    )
  }
}

export default App;
