// Code ClickityClick Component Here
import React, { Component } from 'react'

class ClickityClick extends Component {
    state = { hasbeenClicked:false };
    handleClick = () => {
        this.setState({
            hasbeenClicked: true
        });
    };

    render() {
        return (
            <div>
                <p>
                    I have {this.state.hasbeenClicked ? null : 'not'} been clicked!
                </p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        );
    };

};

export default ClickityClick;