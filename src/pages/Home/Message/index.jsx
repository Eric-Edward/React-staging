import React, { Component } from "react";
import { Route } from "react-router-dom";

import Detail from "./Detail";

class Home_message extends Component {
  state = {
    messages: [
      { id: "001", title: "消息001" },
      { id: "002", title: "消息002" },
      { id: "003", title: "消息003" },
    ],
  };

  pushShow = (message) => {
    //这是通过params进行参数的传递！
    this.props.history.push(
      `/home/message/detail/${message.id}/${message.title}`
    );

    //通过search（query）进行传参
     /* this.props.history.push(
      `/home/message/detail?id=${message.id}&title=${message.title}`
    ); */

    /* this.props.history.push('/home/message/detail', {
      id: message.id,
      title: message.title
    }) */
  };

  replaceShow = (message) => {
    //通过params进行参数的传递！
    this.props.history.replace(
      `/home/message/detail/${message.id}/${message.title}`
    );

    //通过search（query）进行传参！
    /* this.props.history.replace(
      `/home/message/detail?id=${message.id}&title=${message.title}`
    ); */

    /* this.props.history.replace('/home/message/detail',{
      id:message.id,
      title:message.title
    }) */
  };

  render() {
    const { messages } = this.state;
    return (
      <div>
        <ul>
          {messages.map((message) => {
            return (
              <li key={message.id}>
                <button
                  onClick={() => {
                    this.pushShow(message);
                  }}
                >
                  push查看
                </button>
                <button
                  onClick={() => {
                    this.replaceShow(message);
                  }}
                >
                  replace查看
                </button>
                {/* <NavLink to={`/home/message/detail/${message.id}/${message.title}`}>
                                    {/*    {message.title}*/}
                {/*/!*</NavLink>*!/ //这是通过传递params参数，进行参数的传递！*/}

                {/*//下面这里通过传递search参数，进行参数的传递。*/}
                {/*<Link to={`/home/message/detail/?id=${message.id}&title=${message.title}`}>
                                        {message.title}
                                    </Link>*/}

                {/* <Link repalce={true} to={{
                                        pathname: "/home/message/detail",
                                        state: {id: message.id, title: message.title}
                                    }}>
                                        {message.title}
                                    </Link> */}
              </li>
            );
          })}
        </ul>
        <hr />
        {/* 通过params进行传参 */}
        <Route path="/home/message/detail/:id/:title" component={Detail} />

        {/* 通过search进行传参 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}

        {/* 通过state进行传参 */}
        {/* <Route path='/home/message/detail'component={Detail}/> */}

        {/* /!*<Route path="/home/message/detail/:id/:title" component={Detail}/>*!/ //这里是通过params传参 */}
        {/*<Route path="/home/message/detail" component={Detail}/>*/}
        {/* <Route path="/home/message/detail" component={Detail} /> */}
      </div>
    );
  }
}

export default Home_message;
