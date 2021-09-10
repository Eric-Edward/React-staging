import React, {Component} from 'react';
import './index.css'

class List extends Component {
    render() {
        const {users, isFirst, isLoading, error} = this.props;
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