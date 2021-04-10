import React, { Component } from 'react';
import '../App.css';

class SignIn extends Component{
    render(){
      return (
        <section className = "signUp">
        <div class="SignUpBody">
          <form action="">
            <div>
            <img src="img/Sin título-1.png"></img> 
            </div>
            <div>
              <input class ="userNameSp" type="text" placeholder="Email"/>
             </div>
            <div>
              <input class ="passWordSp" type="text" placeholder="Password"/>
             </div>
            <div>
              <input class ="passWordSp2" type="text" placeholder="Confirm Password"/>
             </div>
            <div>
              <button class = "buttonSp">Create Account</button>
             </div>
            <text>You have already <a href="logIn">an Account</a></text>
            </form>
           </div>
          <div class="imgHero">
            <img src="img/piqsels.com-id-srsqr.jpg" alt="person" ></img>
           </div>
      </section>
      );
    }
}

export default SignIn;