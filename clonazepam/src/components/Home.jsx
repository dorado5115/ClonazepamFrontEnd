import React, { Component } from 'react';
import '../Home.css';
import Navbar from "./Navbar";
import { IoPaperPlane } from "react-icons/io5";


class Home extends Component {
    render(){
      return (
          <div>
            <Navbar />
            <div className="messages-body"></div>
               <div className="message-box">
                    <input type="text" name="" className="message-txt" placeholder="Type Your Message..."/>
                    <a className="search-btn">
                        <IoPaperPlane />
                    </a>
                </div>
           </div>
        );
    }
}

export default Home;