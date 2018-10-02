import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
    }

    // this.handleChange = this.handleChange.bind(this);
  };

  handleChange(val) {
    this.setState( {userInput: val } )
  }
  

  render() {
    console.log('this.state', this.state);
    const { userInput } = this.state;

    return (
      <div className="App">
        <input onChange={ e => this.handleChange(e.target.value) } ></input>
        <p> { userInput } </p>
      </div>
    );
  }
}

export default App;
