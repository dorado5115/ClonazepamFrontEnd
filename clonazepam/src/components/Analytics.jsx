import React, { Component } from 'react';
import '../static/Analytics.css';
import '../static/Navbar.css';

import { Navbar } from "./assets"


class Analytics extends Component {
    render(){
      return (
          <div>
            <Navbar email="example@gmail.com"/>
            <div className="information">
                <div className="left-col">
                    <text>Hello</text>
                </div>
                <div className="right-col">
                    <text>Wenas</text>
                </div>
            </div>
           </div>
        );
    }
}

export default Analytics;