  
import React, { Component } from 'react';
import '../App.css';

class LogIn extends Component{
  render(){
    return (
    <section className = "logIn">
      <div class="logIn">
        <form action="">
            <div>
              <img src="img/Sin título-1.png"></img> 
            </div>
            <text>LogIn</text>
            <div>
              <input class ="userNameLi" type="text" placeholder="Username"/>
            </div>
            <div>
              <input class ="passWordLi" type="text" placeholder="Password"/>
            </div>
            <div>
              <button class = "buttonLi">Sing Up</button>
            </div>
            <text class="createAcount">You don't have an Account?<a href="/signUp"> Create one</a></text>
          </form>
        </div>
        <div class="imgHero">
          <img src="img/piqsels.com-id-srsqr.jpg" atl="person"></img>
        </div>
    </section>
    );
  }
}

export default LogIn;