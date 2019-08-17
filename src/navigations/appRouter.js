import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Main from "../main";
class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact render={(routeProps) => (<Main {...routeProps}/>)}/>
                </Switch>
            </Router>
        );
    }
}

export default AppRouter;