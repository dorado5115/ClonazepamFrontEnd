import React, { Component } from 'react';
import '../index.css';

class LogIn extends Component{
  render(){
    return (
      <form action="#">
        <text>LogIn</text>
          <div>
            <input type="text" placeholder="Username"/>
          </div>
          <div>
            <input type="text" placeholder="Password"/>
          </div>
          <div>
            <button>Sing Up</button>
          </div>
          <text class="createAcount">You don't have an Account?<a href="/signUp"> Create one</a></text>
          </form>
      );
    }
}

export default LogIn;