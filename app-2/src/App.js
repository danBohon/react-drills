import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      array: ["spagetti","ice cream","sushi","bologna","cheese"],
    }
  }
  render() {
    let arrayToMap = this.state.array.map( (element, index) => {
      return (
        <h2 key = {index}> { element } </h2>
      )
    })
    return (
      <div className="App">
        {arrayToMap}
      </div>
    );
  }
}

export default App;
