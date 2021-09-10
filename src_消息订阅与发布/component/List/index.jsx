import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import './index.css'

class List extends Component {

    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        error: null
    };

    componentDidMount() {
        this.token = PubSub.subscribe('Search', (_, state) => {
            this.setState(state);
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }

    render() {
        const {users, isFirst, isLoading, error} = this.state;
        return (
            <div className="row">
                {
                    isFirst ? <h2>请输入需要搜索的用户名。</h2> :
                        isLoading ? <h2>正在加载......</h2> :
                            error ? <h2>{error.message}</h2> :
                                users.map((user) => {
                                    return (
                                        <div key={user.id} className="card">
                                            <a rel="noreferrer" href={user.html_url} target="_blank">
                                                <img alt="can not load!" src={user.avatar_url}
                                                     style={{width: '100px'}}/>
                                                <p className="card-text">{user.login}</p>
                                            </a>

                                        </div>
                                    )
                                })
                }
            </div>
        );
    }
}

export default List;