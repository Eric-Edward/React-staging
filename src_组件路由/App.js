import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'


import MyNavLink from "./components/MyNacLink";
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'

// import Test from "./pages/Test";

class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <MyNavLink to="/about">About</MyNavLink>
                            <MyNavLink to="/home">Home</MyNavLink>
                            {/*<NavLink activeClassName="route" className="list-group-item" to="/about">About</NavLink>
                            <NavLink activeClassName="route" className="list-group-item" to="/home">Home</NavLink>*/}
                            {/*<a className="list-group-item" href="./about.html">About</a>
                            <a className="list-group-item active" href="./home.html">Home</a>*/}
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route  path="/about" component={About}/>
                                    <Route  path="/home" component={Home}/>
                                    <Redirect to="/home"/>
                                    {/*<Route path="/home" component={Test}/>*/}
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;