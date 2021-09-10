import React, {Component} from 'react';
import PubSub from "pubsub-js";
import axios from "axios";

class Search extends Component {

    search = () => {
        const {keyWordsNode: {value}} = this;

        PubSub.publish('Search', {isFirst: false, isLoading: true});
        axios.get(`http://localhost:3000/api/search/users?q=${value}`).then(
            response => {
                PubSub.publish('Search', {isLoading: false, users: response.data.items});
            },
            error => {
                PubSub.publish('Search', {isLoading: false, error: error});
            }
        )
    }

    inputComplete = (event) => {
        if (event.keyCode === 13) {
            this.search();
        }
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索github用户</h3>
                <div>
                    <input ref={c => this.keyWordsNode = c} onKeyUp={this.inputComplete} type="text"
                           placeholder="输入关键词！"/>&nbsp;
                    <button onClick={this.search}>搜索！</button>
                </div>
            </section>
        );
    }
}

export default Search;