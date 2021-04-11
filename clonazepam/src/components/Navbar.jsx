import React, { Component } from 'react';
import '../Home.css';

class Navbar extends Component {
    render() {
        return(
            <div className="navbar">
                <div className="inside-navbar">
                    <div className="right-navbar">
                        <text>Eileen</text>
                        <a href="">Chat</a>
                        <a href="">Analytics</a>
                        <a>email@hotmail.com</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;