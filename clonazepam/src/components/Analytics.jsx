import React, { Component } from 'react';
import '../static/Analytics.css';
import '../static/Navbar.css';

import { Navbar, Graph } from "./assets"
{/*import { Navbar, Graph } from "./assets"*/}

class Analytics extends Component {
    render(){
      return (
          <div>
            <Navbar email="example@gmail.com"/>
            <div className="information">
                <div className="left-col">
                    <Graph />
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