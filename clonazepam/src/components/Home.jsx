import React, { Component } from 'react';
import '../Home.css';
import Navbar from "./Navbar";
import EileenSquare from "./EileenSquare"
import MySquares from "./MySquares"
import { IoPaperPlane } from "react-icons/io5";


class Home extends Component {
    render(){
      return (
          <div>
            <Navbar />
            <div className="messages-body">
                {/*Messages square*/}
                <EileenSquare />
                <EileenSquare />
                <MySquares />
            </div>
               <div className="message-box">
                    <input type="text" name="" className="message-txt" placeholder="Tell something to Eileen..."/>
                    <a className="search-btn">
                        <IoPaperPlane />
                    </a>
                </div>
           </div>
        );
    }
}

export default Home;