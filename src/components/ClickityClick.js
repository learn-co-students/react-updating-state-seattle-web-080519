import React from 'react';

class ClickityClick extends React.Component {
    constructor() {
        super();
        // define INITIAL state:
        this.state={hasBeenClicked: false}
        
    };
    handleEvent = () => {
        // here is where to UPDATE state:
        {this.setState({hasBeenClicked: true})}
    };

    render() {
        return(
            <div>
            <p>I have 
            {this.state.hasBeenClicked ? null : 'not'}
            been clicked!</p>
            <button onClick={this.handleEvent}>Click me!</button>
            </div>
        );
    }
};
export default ClickityClick;