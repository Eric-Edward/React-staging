import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";

import Detail from './Detail'

class Home_message extends Component {

    state = {
        messages: [
            {id: '001', title: '消息001'},
            {id: '002', title: '消息002'},
            {id: '003', title: '消息003'}

        ]
    }

    render() {
        const {messages} = this.state;
        return (
            <div>
                <ul>
                    {
                        messages.map((message) => {
                            return (
                                <li key={message.id}>
                                    {/*<NavLink to={`/home/message/detail/${message.id}/${message.title}`}>*/}
                                    {/*    {message.title}*/}
                                    {/*/!*</NavLink>*!/ //这是通过传递params参数，进行参数的传递！*/}


                                    {/*//下面这里通过传递search参数，进行参数的传递。*/}
                                    {/*<Link to={`/home/message/detail/?id=${message.id}&title=${message.title}`}>
                                        {message.title}
                                    </Link>*/}

                                    <Link to={{
                                        pathname: "/home/message/detail",
                                        state: {id: message.id, title: message.title}
                                    }}>
                                        {message.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                {/*/!*<Route path="/home/message/detail/:id/:title" component={Detail}/>*!/ //这里是通过params传参*/
                }
                {/*<Route path="/home/message/detail" component={Detail}/>*/
                }
                <Route path="/home/message/detail" component={Detail}/>
            </div>
        );
    }
}

export default Home_message;