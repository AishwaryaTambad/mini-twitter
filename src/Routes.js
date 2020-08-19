import React, { Component } from 'react'
import { Router, Switch, Route } from "react-router-dom";
import Registration from './components/Registration';
import Formcomponent from './components/Formcomponent';
import history from './history';
import Tweets from './components/Tweets';

export class Routes extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                   <Switch>
                       <Route path="/" exact component={Registration}></Route>
                       <Route path="/Login" component={Formcomponent}></Route>
                       <Route path="/Tweets" component={Tweets}></Route>
                  </Switch> 
                </Router>
            </div>
        )
    }
}

export default Routes
