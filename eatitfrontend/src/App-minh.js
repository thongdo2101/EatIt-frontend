import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App-minh.css';
import SearchScreen from './containers/SearchScreen';

class App extends Component {
  render() {
    return (
      <div>
        <SearchScreen/>
      </div>
    );
  }
}

export default App;
