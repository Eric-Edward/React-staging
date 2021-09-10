import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class Header extends Component {

    goBack = () => {
        this.props.history.goBack();
    }

    goForward = () => {
        this.props.history.goForward();
    }

    render() {
        // console.log(this.props);
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={this.goBack}>回退</button>
                <button onClick={this.goForward}>前进</button>
            </div>
        );
    }
}

export default withRouter(Header);