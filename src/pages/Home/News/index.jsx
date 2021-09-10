import React, { Component } from 'react';

class Home_news extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/home/message');
        }, 2000)
    }

    render() {
        return (
            <ul>
                <li>news001</li>
                <li>news002</li>
                <li>news003</li>
            </ul>
        );
    }
}

export default Home_news;