import React, {Component} from 'react';
import Search from './component/Search/index'
import List from './component/List/index'

class App extends Component {
    render() {
        return (
            <div className="container">
                <Search />
                <List/>
            </div>
        );
    }
}

export default App;