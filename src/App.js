import React, { Component } from 'react';
import * as BooksAPI from './utils/BooksAPI';
import './App.css';

class App extends React.Component {
  state = {
    books : []
  }

  render() {
    return (
      <div className="app">
        Here I am ready to begin
      </div>
    )
  }
}

export default App
