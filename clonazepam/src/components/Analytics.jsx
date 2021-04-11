import React, { Component } from 'react';
import '../static/Analytics.css';
import '../static/Navbar.css';

import { Navbar } from "./assets"

import axios from 'axios'

class Analytics extends Component {
    state = { 
        messages: [],
        timesAnger: 0,
        timesFear: 0,
        timesJoy: 0,
        timesSadness: 0,
        timesAnalytical: 0,
        timesConfident: 0,
        timesTentative: 0,
    }
    
    async componentDidMount() {
        let token = localStorage.getItem('sessionToken')

        if (!token)
            window.location = 'login'

        const { data } = await axios.get("https://eileen-api.herokuapp.com/messages", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        this.setState({ messages: data.messages })

        //anger fear joy sadness analytical confident tentative

        this.state.messages.forEach(message => {
            switch (message.tone) {
                case "anger":
                    this.setState({ timesAnger: this.state.timesAnger+1 })
                    break
                case "fear":
                    this.setState({ timesFear: this.state.timesFear+1 })
                    break
                case "joy":
                    this.setState({ timesJoy: this.state.timesJoy+1 })
                    break
                case "sadness":
                    this.setState({ timesSadness: this.state.timesSadness+1 })
                    break
                case "analytical":
                    this.setState({ timesAnalytical: this.state.timesAnalytical+1 })
                    break
                case "confident":
                    this.setState({ timesConfident: this.state.timesConfident+1 })
                    break
                case "tentative":
                    this.setState({ timesTentative: this.state.timesTentative+1 })
                    break
            }
        })
    }

    render(){
      return (
          <div>
            <Navbar/>
            <div className="information">
                <div className="right-col">
                    <p>Anger: {this.state.timesAnger} times</p>
                    <p>Fear: {this.state.timesFear} times</p>
                    <p>Joy: {this.state.timesJoy} times</p>
                    <p>Sadness: {this.state.timesSadness} times</p>
                    <p>Analitical: {this.state.timesAnalytical} times</p>
                    <p>Confident: {this.state.timesConfident} times</p>
                    <p>Tentative: {this.state.timesTentative} times</p>
                </div>
             </div>
           </div>
        );
    }
}

export default Analytics;