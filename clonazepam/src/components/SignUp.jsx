import React, { Component } from 'react';
import '../static/SignUp.css';

import logo from '../img/logo.png'

import axios from 'axios'

class SignIn extends Component{

  state = {
    email: '',
    password: '',
    confirmPassword: ''
  }

  componentDidMount() {
    let token = localStorage.getItem('sessionToken')

    if (token)
      window.location = '/home'
  }

  async signOut (e) {
    e.preventDefault()
    e.stopPropagation()

    let { email, password, confirmPassword } = this.state

    const { data } = await axios.post("https://eileen-api.herokuapp.com/sign_up", { 
      email,
      password,
      password_confirmation: confirmPassword
    })

    if (data.errors[0]) {
      alert(data.errors[0])
    } else {
      alert('Account created successfully')
      window.location = '/login'
    }
  }

    render(){
      return (
        <section className="signUp">
          <div className="SignUpBody">
            <form action="" onSubmit={e => this.signOut(e)}>
              <div>
                <img className="imgSu" src={logo}></img> 
              </div>
              <div>
                <input className="userNameSp" onChange={e => this.setState({ email: e.target.value })} type="email" placeholder="Email"/>
              </div>
              <div>
                <input className="userNameSp" onChange={e => this.setState({ password: e.target.value })} type="password" placeholder="Password"/>
              </div>
              <div>
                <input className="userNameSp" onChange={e => this.setState({ confirmPassword: e.target.value })} type="password" placeholder="Confirm Password"/>
              </div>
              <div>
                <button className= "buttonSp" type="submit">Create Account</button> {/*AGREGAR CUENTA BACKEND*/}
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