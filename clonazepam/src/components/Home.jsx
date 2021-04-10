import React, { Component } from 'react';
import '../index.css';

class Home extends Component{
    render(){
      return (
            <section className = "right-col">
                <div>
                    <h3>Eileen Chat</h3>
                </div>
                <div>
                    <h3>Hello</h3>
                </div>
                <div className="messages">
                    <input placeholder="Type your message and hit Enter" type="text"/>
                </div>
            </section>
      );
    }
}

export default Home;