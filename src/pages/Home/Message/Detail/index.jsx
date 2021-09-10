import React, { Component } from "react";

import qs from "querystring";

class Detail extends Component {
  state = {
    messages: [
      { id: "001", content: "你好，世界！" },
      { id: "002", content: "哈哈哈哈！" },
      { id: "003", content: "我爱学习！" },
    ],
  };

  render() {
    console.log(this.props);
    //通过params进行传参
    const {id, title} = this.props.match.params;

    //通过search进行传参,这里silce是因为这里前面有一个？
      /* const { search } = this.props.location;
      const { id, title } = qs.parse(search.slice(1));
 */

    //通过state传参
    // const { id, title } = this.props.location.state || {};

    /*const {search} = this.props.location;
        const {id, title} = qs.parse(search.slice(1));*/

    // const {id, title} = this.props.location.state || {};


    const findResult =
      this.state.messages.find((message) => {
        return message.id === id;
      }) || {};

    return (
      <div>
        <ul>
          <li>ID:{id}</li>
          <li>TITLE:{title}</li>
          <li>CONTENT:{findResult.content}</li>
        </ul>
      </div>
    );
  }
}

export default Detail;
