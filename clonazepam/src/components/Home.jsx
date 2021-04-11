import React, { Component } from 'react';
import { Navbar, EileenSquare, MySquares } from "./assets"
import '../static/Home.css';
import '../static/Navbar.css';
import { IoPaperPlane } from "react-icons/io5";

import axios from 'axios'

class Home extends Component {
    state = {
        message: "",
        messages: [],
        response: null
    }

    async componentDidMount() {
        let token = localStorage.getItem("sessionToken")

        if (!token)
            window.location = '/login'

        const { data } = await axios.get("https://eileen-api.herokuapp.com/messages", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        this.setState({ messages: data.messages })

        console.log(this.state.messages)
    }

    sendMessage = async () => {
        let token = localStorage.getItem("sessionToken")
        let { message } = this.state

        const { data } = await axios.post("https://eileen-api.herokuapp.com/messages", { 
            message: {
                body: message
            }
        }, { headers: { Authorization: `Bearer ${token}` } })

        
        this.setState({ messages: [...this.state.messages, { body: this.state.message, created_at: Date.now() } ] })
        this.setState({ response: data.response })
        
        document.getElementById('chat-field').value = ''
        this.setState({ message: '' })
    }

    render(){
      return (
          <div>
                <Navbar />
                    <div className="messages-body">
                    <div>
                        {
                            this.state.messages.map(message => <MySquares date={message.created_at} message={message.body} />)
                        }
                    </div>
                    <div>
                        {
                            this.state.response ? <EileenSquare message={this.state.response} /> : null
                        }
                    </div>
                    </div>
               <div className="message-box">
                    <input type="text" onChange={e => this.setState({ message: e.target.value })} className="message-txt" id="chat-field" placeholder="Tell something to Eileen..."/>
                    <a className="search-btn" onClick={this.sendMessage}>
                        <IoPaperPlane />
                    </a>
                </div>
           </div>
        );
    }
}

export default Home;