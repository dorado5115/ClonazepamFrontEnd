import React, { Component } from 'react';

class EileenSquare extends Component {
    render() {
        return(
            <div>
                <div className="eileen-date">
                    <text>{(new Date()).toLocaleDateString('en-US')}</text>
                </div>
                <div className="square-eileen">
                    <div className="square">
                        <text>{this.props.message}</text>
                    </div>
                </div>
                <div className="empty">
                </div>
            </div>
        );
    }
}

export default EileenSquare;