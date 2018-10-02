import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super() 

    this.state = {
      tasksArray: [],
      userInput: "",
    };
    this.addToList = this.addToList.bind(this);
  };

  handleChange(val) {
    this.setState( {userInput: val})
  }

  addToList() {
    this.setState({
      tasksArray: [...this.state.tasksArray, this.state.userInput],
      userInput: ''
    });
  }



  render() {
    console.log('state',this.state);

    let arrayToMap = this.state.tasksArray.map( (e,i) => {
      return (
        <h2 key = {i}> {e} </h2>
      )
    })
    return (
      <div className="App">
        <h1> My to-do list </h1>
        <input onChange={ e => this.handleChange(e.target.value) }></input>
        <button onClick={ this.addToList }> Add </button>
        <div>{arrayToMap}</div>
      </div>
    );
  }
}

export default App;
