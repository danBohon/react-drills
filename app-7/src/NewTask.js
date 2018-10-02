import React, { Component } from 'react'

export default class NewTask extends Component {
    constructor() {
        super()
        this.state = {
            input: "",
        };
        this.handleAdd = this.handleAdd.bind(this);
    };

    handleInput(val) {
        this.setState( {input: val} );
    }

    handleAdd() {
        this.props.add(this.state.input);
        this.setState( {input: '' });
    }

  render() {
    return (
      <div>
        <input value={ this.state.input }
            placeholder="Enter New Task"
            onChange={e => this.handleInput(e.target.value) }/>
        <button onClick={ this.handleAdd }> Add </button>
      </div>
    )
  }
}

