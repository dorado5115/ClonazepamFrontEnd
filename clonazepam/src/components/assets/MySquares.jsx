import React, { Component } from 'react';

class MySquares extends Component {
    render() {
        return(
            <div className="my-square">
                <div className="my-date">
                    <text>{(new Date(this.props.date)).toLocaleDateString('en-US')}</text>
                </div>
                <div className="square-mine">
                    <div className="square">
                        <text>{this.props.message}</text>
                    </div>
                </div>
            </div>
        );
    }
}

export default MySquares;