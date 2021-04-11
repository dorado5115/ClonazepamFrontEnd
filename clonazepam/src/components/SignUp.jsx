import React, { Component } from 'react';
import '../App.css';

import logo from '../img/logo.png'

class SignIn extends Component{
    render(){
      return (
        <section className = "signUp">
          <div className="SignUpBody">
            <form action="">
              <div>
                <img className="imgSu" src={logo}></img> 
              </div>
              <div>
                <input className="userNameSp" type="text" placeholder="Email"/>
              </div>
              <div>
                <input className="userNameSp" type="text" placeholder="Password"/>
              </div>
              <div>
                <input className="userNameSp" type="text" placeholder="Confirm Password"/>
              </div>
              <div>
                <button className= "buttonSp">Create Account</button>
              </div>
              <div className="yha" >
              <text>You have already <a href="logIn">an Account</a></text>
              </div>
              </form>
            </div>
            <div className="heroNames">
              <h1>You will <strong>choose</strong> the </h1>
              <h1><strong>best</strong> way for your <strong>mind</strong>"</h1>
            </div>
        </section>
      );
    }
}

export default SignIn;