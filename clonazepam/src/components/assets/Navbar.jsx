import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
            <div className="navbar">
                <div className="inside-navbar">
                    <div className="right-navbar">
                        <text>Eileen</text>
                        <a href="/home">Chat</a>
                        <a href="/analytics">Analytics</a>
                        <a onClick={() => {localStorage.clear(); window.location = '/login'}}>Log Out</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;