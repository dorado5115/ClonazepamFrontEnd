import React, { Component } from 'react';

class LogIn extends Component{
  render(){
    return (
      <form action="">
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
          <text class="createAcount">You don't have an Account?<a href="#">Create one</a></text>
          </form>
      );
    }
}

export default LogIn;