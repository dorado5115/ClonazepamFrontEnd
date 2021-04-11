  
import React, { Component } from 'react';
import '../static/Login.css';
import logo from '../img/logo.png'

class LogIn extends Component{
  render(){
    return (
      <section className = "logIn">
      <div className="logInBody">
        <form action="">
          <div>
            <img className="imgLi" src={logo}></img> 
           </div>
          <div>
            <input className="userNameLi" type="text" placeholder="Email"/>
           </div>
          <div>
            <input className="userNameLi" type="text" placeholder="Password"/>
           </div>
          <div>
            <button className= "buttonLi" type="submit">Create Account</button> {/*AGREGAR BACKEND CUENTA */}
           </div>
          <div className="bro" >
          <text>You don't have an Account?<a href="SignUp"> Create your acount</a></text>
           </div>
          </form>
        </div>
        <div className="heroName">
              <h1>"Be <strong>yourself</strong> and </h1>
              <h1>feel <strong>mood</strong>,</h1>
            </div>
    </section>
  );
 }
}

export default LogIn;