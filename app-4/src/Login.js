import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            userName: "",
            password: "",
        }
        this.login = this.login.bind(this);
    }

    login() {
        alert(`Username: ${this.state.userName} Password: ${this.state.password}`);
    }

    handleUser(val) {
        this.setState( {userName: val} )
    }

    handlePass(val) {
        this.setState( {password: val} )
    }

    render() {
        console.log(this.state);

        return (
            <div>
                <input onChange={ e => this.handleUser(e.target.value) } type="text"></input>
                <input onChange={ e => this.handlePass(e.target.value) } type="text"></input>
                <button onClick={ this.login }>Login</button>
            </div>
        )
        
    }




}
export default Login