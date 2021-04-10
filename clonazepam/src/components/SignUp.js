import React, { Component } from 'react';
import '../App.css';

class SignIn extends Component{
    render(){
      return (
        <form action="">
        <text>Sign Up</text>
          <div>
            <input type="text" placeholder="Username"/>
          </div>
          <div>
            <input type="text" placeholder="Password"/>
          </div>
          <div>
            <input type="text" placeholder="Confirm Password"/>
          </div>
          <div>
            <button>Create Account</button>
          </div>
          <text>You have already <a href="logIn">an Account</a></text>
        </form>
      );
    }
}

export default SignIn;