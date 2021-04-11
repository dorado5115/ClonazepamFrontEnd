import React, { Component } from 'react';

class MySquares extends Component {
    render() {
        return(
            <div className="my-square">
                <div className="my-date">
                    <text>Yesterday 5:00 AM</text>
                </div>
                <div className="square-mine">
                    <div className="square">
                        <text>Wenas</text>
                    </div>
                </div>
            </div>
        );
    }
}

export default MySquares;