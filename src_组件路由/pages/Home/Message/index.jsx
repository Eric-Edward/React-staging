import React, {Component} from 'react';
import MyNavLink from "../../../components/MyNacLink";

class Home_message extends Component {
    render() {
        return (
            <ul>
                <li>
                    <MyNavLink to="/home/message/messages1">message001</MyNavLink>
                    {/*<a href="/message1">message001</a>&nbsp;&nbsp;*/}
                </li>
                <li>
                    <MyNavLink to="/home/message/message2">message002</MyNavLink>
                    {/*<a href="/message2">message002</a>&nbsp;&nbsp;*/}
                </li>
                <li>
                    <MyNavLink to="/home/message/message003">message003</MyNavLink>
                    {/*<a href="/message/3">message003</a>&nbsp;&nbsp;*/}
                </li>
            </ul>
        );
    }
}

export default Home_message;