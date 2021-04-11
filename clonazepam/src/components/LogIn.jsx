import React, { Component } from 'react';
import '../static/Login.css';
import logo from '../img/logo.png'

import axios from 'axios'

class LogIn extends Component{
  state = { 
    email: '',
    password: ''
  }

  componentDidMount() {
    let token = localStorage.getItem('sessionToken')

    if (token)
      window.location = '/home'
  }

  async logIn (e) {
    e.preventDefault()
    e.stopPropagation()

    let { email, password } = this.state

    const { data } = await axios.post("https://eileen-api.herokuapp.com/sign_in", { 
      email,
      password
    })

    if (!data.token) {
      alert(data.errors[0])
    } else {
      localStorage.setItem('sessionToken', data.token)
      window.location = '/home'
    }
  }

  render(){
    return (
      <section className="logIn">
      <div className="logInBody">
        <form action="" method="POST" onSubmit={e => this.logIn(e)}>
          <div>
            <img className="imgLi" src={logo}></img> 
           </div>
          <div>
            <input className="userNameLi" onChange={e => this.setState({ email: e.target.value })} type="email" placeholder="Email"/>
           </div>
          <div>
            <input className="userNameLi" onChange={e => this.setState({ password: e.target.value })} type="password" placeholder="Password"/>
           </div>
          <div>
            <button className= "buttonLi" type="submit">Log In</button> {/*AGREGAR BACKEND CUENTA */}
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