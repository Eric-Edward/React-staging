import React, {Component} from 'react';
import Search from './component/Search/index'
import List from './component/List/index'

class App extends Component {

    state = {
        users: [],
        isFirst:true,
        isLoading:false,
        error:null
    };

    updateStateMsg = (state) => {
        this.setState(state);
    }

    render() {
        return (
            <div className="container">
                <Search updateStateMsg={this.updateStateMsg}/>
                <List {...this.state}/>
            </div>
        );
    }
}

export default App;