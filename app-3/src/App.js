import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      array: ["spagetti","ice cream","sushi","bologna","cheese"],
      // filteredArray: [],
    }
  }

  handleChange(val) {
    this.setState( {userInput: val} ) 
  }



  render() {
    console.log(this.state);

    let arrayToMap = this.state.array.filter( (element) => {
      return element.includes(this.state.userInput);
    }).map((element, index) => {
      return <h2 key={index} >{element}</h2>
    })
    
    return (
      <div className="App">
        <input onChange={ e => this.handleChange(e.target.value)}></input>
        <div>
          {arrayToMap}
        </div>

      </div>
    );
  }
}

export default App;
